# Instagram Clone

A full-stack Instagram-inspired social media application built using the MERN stack. Users can create accounts, upload posts, follow other users, interact through likes, and experience a responsive social media interface.

## Features

### Authentication & Security
- User registration and login
- JWT based authentication
- Secure password hashing using bcrypt
- Protected routes
- Cookie-based authentication

### User Features
- Create user accounts
- User profiles
- Follow / Unfollow users
- View posts from users
- Profile image support

### Post Features
- Create posts with images
- Upload images to cloud storage
- Like posts
- View feed posts
- Responsive post layout

### Backend Features
- REST APIs using Express.js
- MongoDB database integration
- Mongoose schemas and models
- Error handling
- Secure middleware implementation

---

## Tech Stack

### Frontend
- React.js
- Tailwind/SCSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT
- bcrypt

### Tools
- Git
- GitHub
- Postman

---

## Project Structure

```
Instagram-Clone/
│
├── Frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
└── README.md
```

---

## Installation

### Clone repository

```bash
git clone https://github.com/krishnakansal004/Instagram-Clone-Social-Media-Platform
```

### Move to project folder

```bash
cd Instagram-Clone
```

### Install frontend dependencies

```bash
cd Frontend
npm install
```

### Install backend dependencies

```bash
cd ../Backend
npm install
```

---

## Environment Variables

Create a `.env` file inside Backend folder:

```env

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key


```

---

## Run Frontend

```bash
cd Frontend
npm run dev
```

## Run Backend

```bash
cd Backend
npm run dev
```

---

## Future Improvements

- Comments system
- Real-time chat
- Notifications
- Stories feature
- Saved posts
- Search functionality
- Reels support

---

## Learning Outcomes

Through this project I learned:

- Building secure authentication systems
- Designing REST APIs
- MongoDB schema relationships
- Backend architecture
- File upload handling
- State management in React
- Full-stack application workflow

---

## Author

Krishna Kansal

GitHub: https://github.com/krishnakansal004
LinkedIn: https://linkedin.com/in/krishna-kansal
