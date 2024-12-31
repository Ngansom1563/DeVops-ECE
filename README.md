# DeVops Project 

## Overview
This project focuses on **DevOps** practices, implementing a **web application** with continuous integration and deployment (CI/CD), containerization, orchestration, and infrastructure automation. The project includes Docker, Kubernetes, Istio, Ansible, Vagrant, and other tools. The application was built using **Node.js** and integrates with platforms such as **Docker Hub**.

## Work Performed

### Features
- **Web Application**: User API with CRUD operations using **Node.js/Express** and **Redis** database
- **CI/CD Pipeline**: Automated pipeline using **GitHub Actions** for testing and deployment
- **Containerization**: Dockerized application with multi-stage builds and Docker Compose
- **Kubernetes Deployment**: Deployed on K8s with configurable replicas and health checks
- **Service Mesh**: Istio integration for traffic management and observability
- **Infrastructure as Code**: Automated provisioning with Ansible and Vagrant

### Bonus Tasks
- **Enhanced Testing**: Comprehensive test suite including unit, API, and integration tests
- **Health Monitoring**: Endpoint for service health and Redis connection status
- **Docker Compose**: Local development environment with Redis integration

## Screenshots
[Screenshots to be added]

## Installation Instructions

### Prerequisites
- Node.js
- Docker
- Kubernetes/Minikube
- Istio
- Vagrant/VirtualBox

### Local Development
```bash
cd userapi
npm install
npm start
```

### Docker Deployment 
```bash
docker-compose up 
```
### Kubernetes Deployment 
```bash 
kubectl apply -f k8s/
kubectl apply -f istio/
```
### Infrastructure Provisioning 
```bash 
cd iac 
vagrant up 
```
### Project Structure 
```plaintext
├── .github/workflows    # CI/CD configuration 
├── userapi/            # Application source
├── k8s/                # Kubernetes manifests
├── istio/              # Service mesh config
├── iac/                # Vagrant & Ansible
└── docker-compose.yml  # Docker configuration file 
```

### Testing 
```bash 
cd userapi
npm test
```

### Authors 
## - NGANSOM Emmanuel
## - LANTIGUA JORGE Charles 

### Links 
- GitHub Repository


- Docker Hub 

