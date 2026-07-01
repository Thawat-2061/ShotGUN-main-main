# Pipeline Animation Thailand (ShotGrid Simulation)

## Overview

Pipeline Animation Thailand is a web-based production management system inspired by Autodesk ShotGrid. The project was developed to simulate an animation production pipeline, enabling teams to manage projects, track production progress, organize assets, and control file versions throughout the production process.

The system was designed to support collaboration between artists, supervisors, and project managers by providing a centralized platform for production management.

---

## Objectives

- Simulate the core workflow of Autodesk ShotGrid
- Manage animation production projects efficiently
- Track project progress in real time
- Organize Sequences, Shots, Assets, and Tasks
- Manage uploaded files and version history
- Improve collaboration among project members

---

## Features

### Project Management
- Create and manage animation projects
- Display all available projects
- View project details and production progress

### Sequence Management
- Organize animation projects into Sequences
- Manage different production sections (Trailer, MV, Episode, etc.)

### Shot Management
- Create and manage Shots
- Link Shots to their corresponding Sequence
- Track Shot progress

### Asset Management
- Manage all production assets
- Store asset information and related files

### Task Management
- Assign tasks to team members
- Track task status
- Set reviewers
- Manage start and end dates
- Link tasks to related Shots or Assets

### Version Management
- Upload work versions
- Keep version history
- Submit work for supervisor review

### File Management
- Store uploaded files
- View file information
- Download project files

### Member Management
- Manage project members
- Add or remove users
- Assign responsibilities

### Personal Task Dashboard
- Display tasks assigned to each member
- View work schedules and responsibilities

---

## Pages

| Page | Description |
|------|-------------|
| Home | Display all projects and create new projects |
| Project Detail | Show project information and overall progress |
| Sequences | Manage animation sequences |
| Shots | Manage shots within each sequence |
| Assets | Manage production assets |
| Tasks | Assign and monitor production tasks |
| Versions | Upload and review work versions |
| Files | Manage uploaded project files |
| People | Manage project members |
| People List | Display tasks assigned to each member |

---

## Technology Stack

### Frontend
- React
- TypeScript
- Vite
- CSS

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- Git
- GitHub
- Visual Studio Code
- Postman
- Docker

---

## System Workflow

```
Project
    │
    ├── Sequence
    │      │
    │      └── Shot
    │              │
    │              ├── Task
    │              │      │
    │              │      └── Version
    │              │
    │              └── Files
    │
    └── Asset
           │
           ├── Task
           │      │
           │      └── Version
           │
           └── Files
```

---

## Screenshots

### Home Page
Displays all projects and allows users to create new projects.

<img width="1056" height="493" alt="image" src="https://github.com/user-attachments/assets/73dbbdae-3e94-40a9-9a8d-a0c6e0e6a9b9" />

---

### Project Detail
Displays project information and production progress.

<img width="1012" height="460" alt="image" src="https://github.com/user-attachments/assets/8f269085-d771-4775-9471-44df8f5e2a75" />

---

### Sequences
Displays all sequences within a project.

<img width="998" height="452" alt="image" src="https://github.com/user-attachments/assets/4bbe8619-c78b-4567-a111-5a5be2776b6f" />

---

### Shots
Displays all shots linked to a sequence.

<img width="1053" height="473" alt="image" src="https://github.com/user-attachments/assets/8088c304-af45-412e-886e-33a31774292a" />

---

### Assets
Displays all production assets.

<img width="1062" height="480" alt="image" src="https://github.com/user-attachments/assets/f9d79105-d80e-4db2-a42e-2396baef73c1" />

---

### Tasks
Displays task status, assignees, reviewers, and schedules.

<img width="1020" height="462" alt="image" src="https://github.com/user-attachments/assets/fa811db1-e519-4e9a-86a3-706022208932" />

---

### Versions
Displays uploaded versions for review.

<img width="1023" height="462" alt="image" src="https://github.com/user-attachments/assets/ae86a8e7-0ab0-4b3e-a815-3dd2b2436f2c" />

---

### Files
Displays uploaded project files and allows downloads.

<img width="1042" height="476" alt="image" src="https://github.com/user-attachments/assets/bbaefeba-8032-4d34-a329-da707140ed99" />

---

### People
Displays project members.

<img width="1073" height="482" alt="image" src="https://github.com/user-attachments/assets/eea7a133-189b-4d61-9d9f-c68e3c6d028f" />

---

### People List
Displays all tasks assigned to a selected member.

<img width="1020" height="457" alt="image" src="https://github.com/user-attachments/assets/7de80c0a-0089-4ab4-b246-837cb2579b23" />

---

## My Responsibilities

- Developed the frontend using React and TypeScript
- Implemented project management interfaces
- Developed CRUD functionality for Projects, Sequences, Shots, Assets, Tasks, Versions, Files, and Members
- Integrated frontend with RESTful APIs
- Designed reusable React components
- Implemented navigation and routing
- Tested and debugged application features
- Collaborated with the development team

---

## Future Improvements

- Dashboard analytics
- Notification system
- Role-based access control
- Advanced search and filtering
- File preview support
- Responsive mobile interface

---

## References

This project was inspired by Autodesk ShotGrid and was developed for educational purposes to simulate an animation production management system.
