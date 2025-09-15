
---

# Full Stack Docker

![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![License](https://img.shields.io/badge/License-MIT-yellow)

A fully Dockerized **full-stack web application** featuring a React frontend and an Express.js backend, orchestrated using Docker Compose.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Setup Instructions](#setup-instructions)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Docker Commands](#docker-commands)
9. [Troubleshooting](#troubleshooting)
10. [Docker Hub Images](#docker-hub-images)
11. [License](#license)

---

## Project Overview

This project demonstrates how to:

* Build a RESTful backend API with **Express.js**.
* Build a dynamic frontend with **React** that consumes the backend API.
* Containerize both frontend and backend using **Docker**.
* Use **Docker Compose** to orchestrate multi-container applications.

---

## Features

**Backend**

* Node.js + Express REST API.
* Stores a list of fruits (in-memory storage).
* Provides endpoints to:

  * Fetch all items.
  * Add a new item.

**Frontend**

* React-based SPA (Single Page Application).
* Interacts with backend API.
* Allows adding and viewing items in real-time.

**Docker & Docker Compose**

* Each service runs in its own container.
* Containers communicate over a custom network.
* Easy to deploy on any environment with Docker installed.

---

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
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
├── docker-compose.yml
└── README.md
```

---

## Prerequisites

* [Docker](https://docs.docker.com/get-docker/) (v20.x+ recommended)
* [Docker Compose](https://docs.docker.com/compose/install/) (v2.x+ recommended)
* Optional: [Node.js & npm](https://nodejs.org/) if you want to run frontend/backend locally without Docker.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/albinraju29/full-stack-docker.git
cd full-stack-docker
```

### 2. Build and Run with Docker Compose

```bash
docker-compose up --build
```

* Builds Docker images for both frontend and backend.
* Starts containers on ports defined in `docker-compose.yml`.

### 3. Access the Application

* **Frontend**: [http://localhost:3000](http://localhost:3000)
* **Backend API**: [http://localhost:3001/api/items](http://localhost:3001/api/items)

---

## Usage

**Frontend**

* Add a fruit using the input box and `Add` button.
* The list updates automatically via the backend API.

**Backend**

* View all items:

```bash
GET http://localhost:3001/api/items
```

* Add a new item:

```bash
POST http://localhost:3001/api/items
Content-Type: application/json
Body: { "name": "Mango" }
```

---

## Docker Commands

* Build images and start containers:

```bash
docker-compose up --build
```

* Start containers without building:

```bash
docker-compose up -d
```

* Stop and remove containers:

```bash
docker-compose down
```

* View running containers:

```bash
docker ps
```

* Remove all images (optional cleanup):

```bash
docker rmi full-stack-docker-backend full-stack-docker-frontend
```

---

## Troubleshooting

* **Port Already in Use**

```bash
Error: Bind for 0.0.0.0:3000 failed: port is already allocated
```

Solution: Stop the existing service using that port, or change ports in `docker-compose.yml`.

* **Frontend cannot connect to backend**

  * Ensure the backend container is running.
  * Check the network connection defined in `docker-compose.yml`.
  * For development, use the correct backend URL in React (`http://localhost:3001/api/items`).

* **React Development Server shows warnings**

  * Warnings like `onBeforeSetupMiddleware` are deprecated but do not break functionality.

---

## Docker Hub Images

* **Backend**: [`albinraju29/full-stack-docker-backend`](https://hub.docker.com/r/albinraju29/full-stack-docker-backend)
* **Frontend**: [`albinraju29/full-stack-docker-frontend`](https://hub.docker.com/r/albinraju29/full-stack-docker-frontend)

You can pull and run images directly without building locally:

```bash
docker run -p 3001:3001 albinraju29/full-stack-docker-backend
docker run -p 3000:3000 albinraju29/full-stack-docker-frontend
```

---

## License

This project is licensed under the **MIT License**.


