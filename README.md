# Project Name

## Overview
This project focuses on **DevOps** practices, implementing a **web application** with continuous integration and deployment (CI/CD), containerization, orchestration, and infrastructure automation. The project includes Docker, Kubernetes, Istio, Ansible, Vagrant, and other tools. The application was built using **Node.js**, **Next.js**, and integrates with platforms such as **Heroku** and **Docker Hub**.

## Work Performed

### Features
- **Web Application**: Developed a full-stack application using **React/Next.js** for the front-end and **Node.js** for the back-end.
- **CI/CD Pipeline**: Set up an automated pipeline using **GitHub Actions** for continuous integration and deployment.
- **Containerization**: Dockerized the application, ensuring it runs smoothly in any environment.
- **Kubernetes Deployment**: Deployed the application to a **Kubernetes cluster** using **Helm charts** for easier management.
- **Service Mesh with Istio**: Integrated **Istio** for managing microservices traffic, ensuring enhanced security, and improving observability.
- **Infrastructure as Code (IaC)**: Utilized **Ansible** for automating server configuration and **Vagrant** for virtual machine provisioning.

### Bonus Tasks
- **Scaling**: Implemented auto-scaling with **Kubernetes** based on CPU and memory utilization.
- **Load Balancer**: Configured a **Kubernetes Ingress Controller** with a load balancer.
- **Logging and Monitoring**: Integrated **Prometheus** and **Grafana** for monitoring the health of the application.
- **Deployment to Heroku**: Configured automatic deployment to **Heroku** for live application testing.
- **Docker Compose**: Created a **Docker Compose** setup for local development.

## Screenshots

To give you a visual reference for this project, you can view some screenshots below:

- [Web Application](screenshots/web_application.png)
- [Kubernetes Resources](screenshots/k8s_resources.png)
- [Docker Compose Setup](screenshots/docker_compose.png)
- [VMs](screenshots/vms.png)

These screenshots provide a glimpse into the application running on different platforms and environments.

## Installation Instructions

To get started with this project, follow the instructions below:

### Prepare Your Environment
1. **Install Docker**: 
   - Visit the [Docker website](https://www.docker.com/get-started) and download the appropriate version for your operating system.
   - Follow the installation instructions.

2. **Install Kubernetes (via Minikube or Docker Desktop)**:
   - For **Minikube**, follow the instructions on [Minikube's website](https://minikube.sigs.k8s.io/docs/).
   - For **Docker Desktop**, Kubernetes is already included. Ensure it is enabled in the Docker settings.

3. **Install Helm (optional, for Kubernetes deployment)**:
   - Run `brew install helm` if you're on macOS, or follow the instructions for other OSes at [Helm's website](https://helm.sh/docs/).

4. **Install Ansible and Vagrant (for IaC)**:
   - For **Ansible**, follow the instructions on [Ansible's website](https://www.ansible.com/).
   - For **Vagrant**, follow the instructions on [Vagrant's website](https://www.vagrantup.com/).

### Clone the Repository
```bash
git clone https://github.com/your-username/project-name.git
cd project-name
