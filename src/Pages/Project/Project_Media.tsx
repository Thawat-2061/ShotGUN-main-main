import { useEffect, useRef, useState } from "react";
import ENDPOINTS from "../../config";

type Video = {
  id: number;
  video_url: string;
};




export default function ProjectMedia() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /* ===== LOAD VIDEOS ===== */
  useEffect(() => {
    let ignore = false;

    const loadVideos = async () => {
      try {
        const res = await fetch(ENDPOINTS.VIDEOS);
        
        // ตรวจสอบว่า response เป็น JSON จริงหรือไม่
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not JSON. Check your API endpoint.");
        }

        const data = await res.json();

        if (!ignore) {
          setVideos(data);
        }
      } catch (err) {
        console.error("Load videos failed:", err);
        console.error("Endpoint:", ENDPOINTS.VIDEOS);
        // แสดง error ให้ user เห็น
        alert(`Failed to load videos: ${err}`);
      }
    };

    loadVideos();
    return () => {
      ignore = true;
    };
  }, []);

  /* ===== UPLOAD VIDEO ===== */
  const handleUpload = async (file: File) => {
    try {
      setUploading(true);
      setUploadProgress(0);

      // Upload file และบันทึก database พร้อมกัน
      const formData = new FormData();
      formData.append("video", file);

      const uploadRes = await fetch(ENDPOINTS.UPLOAD_VIDEO, {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) throw new Error("Upload failed");

      const uploadData = await uploadRes.json();
      setUploadProgress(100);

      // เพิ่มเข้า state
      setVideos((prev) => [uploadData, ...prev]);

      alert("Upload successful!");
    } catch (err) {
      console.error(err);
      alert("Upload failed: " + err);
    } finally {
      setUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  /* ===== DELETE VIDEO ===== */
  const handleDelete = async (videoId: number) => {
    if (!confirm("Delete this video?")) return;

    try {
      const res = await fetch(`${ENDPOINTS.VIDEOS}/${videoId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setVideos((prev) => prev.filter((v) => v.id !== videoId));
      alert("Deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">Project Media</h1>
      </nav>

      <div className="p-6 max-w-7xl mx-auto">
        {/* ===== UPLOAD BUTTON ===== */}
        <div className="mb-6 bg-white rounded-lg shadow p-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium 
                     hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors"
          >
            {uploading ? `Uploading... ${uploadProgress}%` : "📹 Upload Video"}
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(file);
            }}
          />

          {uploading && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* ===== VIDEO LIST ===== */}
        {videos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No videos uploaded yet</p>
            <p className="text-sm mt-2">Click the button above to upload your first video</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
            >
              <video
                controls
                className="w-full aspect-video bg-black"
                src={ENDPOINTS.IMAGE_URL + video.video_url}
              />
              <div className="p-3 flex justify-between items-center">
                <span className="text-sm text-gray-600">Video #{video.id}</span>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 
                           rounded transition-colors"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}