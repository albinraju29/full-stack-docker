Here’s a rewritten README for your full-stack-docker project with all code blocks correctly formatted, images displayed visually (not as links), and a properly structured directory tree. This provides clear instructions, uses standard Markdown, and displays links and references correctly.[1]

***

# Full Stack Docker

## Overview

This project demonstrates how to containerize a full-stack web application using Docker. It comprises:

- **Backend**: A RESTful API built with Express.js and Node.js.
- **Frontend**: A React application.
- **Docker Compose**: Orchestrates and manages multi-container Docker applications.

***

## Project Structure

```
full-stack-docker/
├── backend/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── Dockerfile
│   ├── src/
│   └── package.json
├── docker-compose.yml
└── README.md
```

***

## Features

**Backend**  
- Provides a REST API to manage a list of fruits.  
- Endpoints:  
  - `GET /api/items` — Fetch all items.  
  - `POST /api/items` — Add a new item.  

**Frontend**  
- A React application that interacts with the backend API.  
- Allows users to view and add fruits to the list.  

**Docker**  
- Each service (frontend and backend) is containerized using Docker.  
- Docker Compose builds and runs the multi-container application.  

***

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)  
- [Docker Compose](https://docs.docker.com/compose/install/)  

***

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/albinraju29/full-stack-docker.git
cd full-stack-docker
```

### 2. Build and start the application
```bash
docker-compose up --build
```
- This will build Docker images for both frontend and backend and start containers as defined in `docker-compose.yml`.

### 3. Access the application
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3001/api/items](http://localhost:3001/api/items)

### 4. Stop the application
```bash
docker-compose down
```

***

## Docker Hub Images

- **Backend**: [`albinraju29/full-stack-docker-backend`](https://hub.docker.com/r/albinraju29/full-stack-docker-backend)
- **Frontend**: [`albinraju29/full-stack-docker-frontend`](https://hub.docker.com/r/albinraju29/full-stack-docker-frontend)

***

## License

This project is licensed under the MIT License.

***

### 📌 Notes

- **Backend**: The Express.js server listens on port 3001 and provides API endpoints to manage a list of fruits.[1]
- **Frontend**: The React application communicates with the backend API.[1]
- **Docker Compose**: The `docker-compose.yml` orchestrates the building and running of both frontend and backend services.[1]

Feel free to customize this README based on any additional features or configurations you might add.[1]

[1](https://github.com/albinraju29/full-stack-docker)
