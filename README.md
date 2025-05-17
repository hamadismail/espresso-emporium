# ☕ Espresso Emporium

**Espresso Emporium** is a full-stack coffee store web application where users can add, update, delete, and view coffee details. It features secure user authentication and a clean, responsive UI to provide a seamless experience for users.

---

## 🚀 Live Demo

- 🔗 Frontend: [https://mycoffeshop2.web.app/](https://mycoffeshop2.web.app/)
- 🔗 Backend: [https://coffe-shop-server-ebon.vercel.app/](https://coffe-shop-server-ebon.vercel.app/)

---

## 📂 Project Structure

### 🔧 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Firebase Authentication
- **Backend**: Express.js, MongoDB, Node.js
- **Deployment**:
  - Frontend → Firebase Hosting
  - Backend → Vercel

---

## ✨ Features

- Firebase Authentication (Login/Signup)
- Full CRUD operations on coffee data
- Modern responsive UI
- Toast notifications
- REST API integration
- MongoDB database for storing coffee entries

---

## 📸 Screenshots
![Espresso Emporium](https://github.com/user-attachments/assets/0c9ee42b-31f0-4069-9770-cd80a97e3af1)


---

## 📦 Installation Guide

### ✅ Prerequisites

- Node.js and npm installed
- MongoDB Atlas or local MongoDB instance
- Firebase project (for authentication and hosting)

---

## ⚙️ Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/hamadismail/espresso-emporium.git
cd backend
```

### Install backend dependencies:

```bash
npm install
```

### Create a `.env` file in the root of the backend and add:

```bash
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
```

### Start the server:

```bash
nodemon index.js
```

---

## 🌐 Frontend Setup

### Navigate to the frontend folder :

```bash
cd frontend
```

### Install frontend dependencies:

```bash
npm install
```

### Create a .env.local file in the frontend root and add:

```bash
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

### Start the development server:

```bash
npm run dev
```

## 🛠️ API Endpoints

| Method | Endpoint     | Description            |
| ------ | ------------ | ---------------------- |
| GET    | /coffees     | Get all coffee entries |
| GET    | /coffees/:id | Get single coffee      |
| POST   | /coffees     | Add a new coffee       |
| PUT    | /coffees/:id | Update existing coffee |
| DELETE | /coffees/:id | Delete a coffee item   |

## Authentication

- Firebase Authentication is used to handle user sign-up and login.
- Visitors can access CRUD functionalities.
- User session is persisted using Firebase Auth state.

## 📫 Contact

Feel free to reach out with any questions or feedback!

- 💻 GitHub: hamadismail

- 📧 Email: hamad.ismail.gub@gmail.com
