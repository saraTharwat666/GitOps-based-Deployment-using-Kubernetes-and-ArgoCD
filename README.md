## DevOps Internship Assessment - Todo List Node.js Application

![Project Screenshot](https://github.com/Ankit6098/Todos-nodejs/assets/92246613/487f548f-7ca6-4183-9443-c88c9f79c3f0)

## Summary
This project is a **Todo List web application** built with Node.js, Express.js, MongoDB, and Mongoose. It demonstrates a full DevOps workflow including Dockerization, CI/CD pipelines with GitHub Actions, VM provisioning with Ansible, container orchestration with Docker Compose, and optionally Kubernetes with ArgoCD for continuous deployment.

---

## Assessment Parts

### Part 1 (30 points)
- **Clone the repository**
```bash
git clone https://github.com/Ankit6098/Todo-List-nodejs
```
- **Use your own MongoDB database** by configuring the `.env` file.
```bash
cp .env.example .env
# Add your MongoDB URI
```
- **Dockerize the application** by creating a `Dockerfile`.
- **CI Pipeline**: Use GitHub Actions to build the Docker image and push it to a **private Docker registry**.

---

### Part 2 (30 points)
- **Create a Linux VM** locally or on the cloud.
- **Use Ansible** to configure the VM and install packages such as Docker.
- **Run Ansible from your local machine** against the VM.

---

### Part 3 (40 points)
- **Run the application on the VM using Docker Compose**.
- **Configure health checks** to ensure the container is running properly.
- **Auto-update**: Continuously monitor for changes in the Docker image on the registry. If a new image is detected, pull the update automatically.  
  > For the auto-update part, you can use any tool you like (e.g., watchtower for Docker) and justify your choice.

---

### Part 4 - Bonus (50 points)
- **Use Kubernetes** instead of Docker Compose on the VM.
- **Use ArgoCD** for continuous deployment and automated syncing with the repository.

---

## Features
- Create, update, and delete tasks
- Persistent storage with MongoDB
- Containerized deployment with Docker
- Health checks for reliability
- Optional: Kubernetes deployment with ArgoCD for CD

---

## Technologies Used
- Node.js, Express.js, MongoDB, Mongoose  
- Docker, Docker Compose, Kubernetes  
- GitHub Actions, ArgoCD, Ansible  

---

## Run Locally
1. Clone the repo
```bash
git clone https://github.com/saraTharwat666/GitOps-based-Deployment-using-Kubernetes-and-ArgoCD.git
cd GitOps-based-Deployment-using-Kubernetes-and-ArgoCD
```
2. Install dependencies
```bash
npm install
```
3. Create `.env` file and set your MongoDB URI
```bash
cp .env.example .env
```
4. Run the server
```bash
npm start
```

---

## Deployment
### Docker Compose
```bash
docker-compose up -d
```

### Kubernetes (Bonus)
```bash
kubectl apply -f k8s/mongo-deployment.yaml
kubectl apply -f k8s/mongo-service.yaml
kubectl apply -f k8s/todo-deployment.yaml
kubectl apply -f k8s/todo-service.yaml
```

---

## Demo
Under process...

---

## Authors
- Sara Tharwat - [GitHub](https://github.com/saraTharwat666)

---

## Screenshots
![Todo App Screenshot 1](https://github.com/Ankit6098/Todos-nodejs/assets/92246613/487f548f-7ca6-4183-9443-c88c9f79c3f0)
![Todo App Screenshot 2](https://github.com/Ankit6098/Todos-nodejs/assets/92246613/25515d2e-1d72-498d-8044-59a01c6b9127)
![Todo App Screenshot 3](https://github.com/Ankit6098/Todos-nodejs/assets/92246613/316d15ca-1fe8-4581-80b1-fc316340bba6)
![Todo App Screenshot 4](https://github.com/Ankit6098/Todos-nodejs/assets/92246613/44a0c418-449e-446f-8a8e-3c4e14fca8bf)
![Todo App Screenshot 5](https://github.com/Ankit6098/Todos-nodejs/assets/92246613/2ee90ab0-95d4-44f4-80ac-b17b088ac1ce)
![Todo App Screenshot 6](https://github.com/Ankit6098/Todos-nodejs/assets/92246613/960ff353-1ce9-4ef8-94e4-10af09184fd2)
![Todo App Screenshot 7](https://github.com/Ankit6098/Todos-nodejs/assets/92246613/f5ffc3b8-480f-4d11-9a0b-c469e3c17e8e)

---

## Acknowledgements
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/)  
- [Mongoose](https://mongoosejs.com/)  
- [Docker](https://www.docker.com/)  
- [Kubernetes](https://kubernetes.io/)  
- [ArgoCD](https://argo-cd.readthedocs.io/)  
- [Ansible](https://www.ansible.com/)
