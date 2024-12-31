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
- Test local
  
<img width="611" alt="image" src="https://github.com/user-attachments/assets/c371012e-c731-43c5-b9e5-b68adde43692" />

- Test avec Docker
  
<img width="611" alt="image" src="https://github.com/user-attachments/assets/d4fe910a-4c19-4b2e-b01f-4871dc08859c" />

- Test de deploiement
- 
<img width="611" alt="image" src="https://github.com/user-attachments/assets/b55f9c4d-1e6b-4bd8-9f0d-108f40b5c5d3" />

-Verification des pods et services

<img width="611" alt="image" src="https://github.com/user-attachments/assets/6f7b832d-4074-433d-9c88-f02daccd7c48" />

<img width="611" alt="image" src="https://github.com/user-attachments/assets/a9b8fba5-1423-4ea2-95f3-0b931b089158" />

- Utiliser minikube pour accéder à l’application
  
<img width="611" alt="image" src="https://github.com/user-attachments/assets/46f9b853-9119-42d6-a8b3-1b6c87139192" />

- Test d'infrastructure
  
<img width="596" alt="image" src="https://github.com/user-attachments/assets/8026e03e-3a7c-44b7-bf55-2b4cdc203aeb" />

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
- GitHub Repository https://github.com/Ngansom1563/DeVops-ECE.git


- Docker Hub https://hub.docker.com/u/ngansom

