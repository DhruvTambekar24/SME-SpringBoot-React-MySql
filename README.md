# 🚀 AI-Powered SME Growth Platform

> A full-stack SaaS platform designed to help small and medium enterprises (SMEs) manage their business operations efficiently. The system provides secure authentication, customer/product/order management, and a scalable backend architecture.

---

## 📌 Features

- 🔐 **JWT-based Authentication** — Login & Signup
- 👥 **Customer Management** — Add / View customers
- 📦 **Product Management** — Add / View products
- 🧾 **Order Management** — Create / View orders
- 📊 **Dashboard** — Frontend analytics view
- 🌐 **REST APIs** with Swagger Documentation
- 🔒 **Secure APIs** using Spring Security
- 🗄️ **MySQL Database** Integration

---

## 🏗️ Architecture

### 🔷 High-Level Architecture

```
React Frontend (Vite + Tailwind)
        ↓
  Axios API Calls
        ↓
 Spring Boot Backend
        ↓
Controller → Service → Repository
        ↓
    MySQL Database
```

### 🔐 Authentication Flow (JWT)

```
User Login → Backend → Generate JWT
Frontend stores token (localStorage)
Frontend sends token in headers
Backend validates token → allows access
```

---

## ⚙️ Tech Stack

| Layer       | Technologies                                      |
|-------------|---------------------------------------------------|
| **Frontend**  | React (Vite), Tailwind CSS, Axios, React Router |
| **Backend**   | Spring Boot, Spring Security, JWT, REST APIs    |
| **Database**  | MySQL, JPA / Hibernate                          |
| **Tools**     | Swagger, Postman, Gradle                        |

---

## 📂 Project Structure

### Backend

```
src/main/java/com/example/SMEPlatform
│
├── config/         # Security, JWT, CORS configuration
├── controller/     # API Endpoints
├── service/        # Business Logic
├── repository/     # Database Access
├── entity/         # Database Models
└── dto/            # Request/Response Objects
```

---

## 🗄️ Database Schema

### Create Database

```sql
CREATE DATABASE sme_db;
USE sme_db;
```

### Tables

```sql
CREATE TABLE users (
    id       BIGINT AUTO_INCREMENT PRIMARY KEY,
    email    VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role     VARCHAR(50)
);

CREATE TABLE customers (
    id      BIGINT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(255),
    contact VARCHAR(50)
);

CREATE TABLE products (
    id    BIGINT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(255),
    price DOUBLE
);

CREATE TABLE orders (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    total_price DOUBLE
);
```

---

## 🔧 Setup Instructions

### 🖥️ Backend Setup

**1. Clone the Repository**

```bash
git clone <your-repo-link>
cd backend
```

**2. Configure Database**

Update `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sme_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

**3. Build & Run Backend**

```bash
./gradlew clean build
./gradlew bootRun
```

> 👉 Backend runs on: **http://localhost:8080**

**4. Swagger API Docs**

```
http://localhost:8080/swagger-ui/index.html
```

---

### 🌐 Frontend Setup

**1. Navigate to the frontend directory**

```bash
cd frontend
```

**2. Install Dependencies**

```bash
npm install
```

**3. Run Frontend**

```bash
npm run dev
```

> 👉 Frontend runs on: **http://localhost:5174**

---

## 🔐 JWT Implementation

### How It Works

1. User logs in → backend verifies credentials
2. Backend generates a JWT token
3. Token is stored in the frontend (`localStorage`)
4. Token is sent in every API request via the `Authorization` header:

```
Authorization: Bearer <token>
```

### Token Structure

```
HEADER.PAYLOAD.SIGNATURE
```

**Example Payload:**

```json
{
  "sub": "test@gmail.com",
  "exp": 1710000000
}
```

---

## 📡 API Endpoints

### 🔐 Auth

| Method | Endpoint       | Description     |
|--------|----------------|-----------------|
| POST   | `/auth/signup` | Register a user |
| POST   | `/auth/login`  | Login a user    |

### 👥 Customers

| Method | Endpoint      | Description        |
|--------|---------------|--------------------|
| POST   | `/customers`  | Add a customer     |
| GET    | `/customers`  | Get all customers  |

### 📦 Products

| Method | Endpoint     | Description       |
|--------|--------------|-------------------|
| POST   | `/products`  | Add a product     |
| GET    | `/products`  | Get all products  |

### 🧾 Orders

| Method | Endpoint   | Description     |
|--------|------------|-----------------|
| POST   | `/orders`  | Create an order |
| GET    | `/orders`  | Get all orders  |

---

## 🔄 Data Flow

```
Frontend → Controller → Service → Repository → MySQL
```

---

## 🧪 Testing

Use the following tools to test the APIs:

- **Swagger UI** — `http://localhost:8080/swagger-ui/index.html`
- **Postman** — Import endpoints and test manually

---

## ⚠️ Common Issues

| Error | Cause | Fix |
|-------|-------|-----|
| `401 Unauthorized` | Token missing or invalid | Check JWT token in request headers |
| `403 Forbidden` | Security config issue | Review Spring Security configuration |
| `500 Internal Server Error` | Backend exception | Check application logs |
| `CORS Error` | CORS misconfiguration | Update CORS settings in backend config |

---

## 🚀 Future Enhancements

- 🏢 Business-based multi-tenant system
- 📊 Advanced analytics dashboard
- 🤖 AI-based business insights
- ⚙️ Microservices architecture
- 🐳 Docker & container deployment

---

## 🎯 What This Project Demonstrates

- ✅ Full-stack development (React + Spring Boot)
- ✅ Secure JWT-based authentication
- ✅ Clean REST API design
- ✅ Relational database integration (MySQL + JPA)
- ✅ Scalable layered architecture

---

## 👨‍💻 Author

**Dhruv Tambekar**

---

> ⭐ If you found this project helpful, feel free to star the repository!
