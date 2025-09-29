#**MERN Auth Dashboard**

A full-stack MERN (MongoDB, Express, React, Node.js) application with user authentication, CRUD operations, and a dashboard. Built with React + Tailwind CSS for the frontend and Express + MongoDB Atlas for the backend.

##Features

-User Signup and Login
-Dashboard showing all users
-CRUD operations: Create, Read, Update, Delete users
-Frontend styled with Tailwind CSS
-Uses MongoDB Atlas for database

##Tech Stack

Frontend: React, Tailwind CSS, Axios

Backend: Node.js, Express.js, Mongoose

Database: MongoDB Atlas

##Folder Structure
mern-auth-dashboard/
│
├─ backend/
│   ├─ server.js
│   ├─ package.json
│   ├─ routes/
│   │    └─ userRoutes.js
│   ├─ models/
│   │    └─ User.js
│   ├─ config/
│   │    └─ db.js
│   └─ .env
│
├─ frontend/
│   ├─ package.json
│   ├─ tailwind.config.js
│   ├─ postcss.config.js
│   ├─ src/
│   │    ├─ App.jsx
│   │    ├─ main.jsx
│   │    ├─ pages/
│   │    │    ├─ Login.jsx
│   │    │    ├─ SignUp.jsx
│   │    │    └─ Dashboard.jsx
│   │    └─ index.css
│
├─ .gitignore
└─ README.md

##API Endpoints

###Method	###Endpoint	###Description
POST	/api/signup	Create new user
POST	/api/login	Login user
GET	/api/users	Get all users
PUT	/api/users/:id	Update user
DELETE	/api/users/:id	Delete user


License

MIT © Rahul M S
