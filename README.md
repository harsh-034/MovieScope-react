# 🎬 MovieScope - React Movie Search App

**MovieScope** is a responsive React application that allows users to search for movies and view detailed information using the OMDb API. It features real-time search, clean UI, and smooth navigation, built with a focus on simplicity and performance.

---

## 🔗 Live Demo

[👉 View Live App](https://your-live-link.netlify.app)

---

## 📸 Screenshots

### 🔍 Movie Search Page  
![Movie Search](https://your-uploaded-screenshot-link-1)

### 🎥 Movie Details Page  
![Movie Details](https://your-uploaded-screenshot-link-2)

---

## ✨ Features

- Real-time movie search using the OMDb API  
- Movie cards with poster, title, and release year  
- Detailed movie view (genre, rating, plot, etc.)  
- Seamless navigation with React Router  
- Fully responsive design  
- Graceful error handling

---

## 🛠️ Tech Stack

- React.js  
- React Router DOM  
- JavaScript (ES6+)  
- HTML5 & CSS3  
- OMDb API

---

## 🔐 Environment Setup & API Key Security

### 🧾 Step-by-Step Guide

1. **Create a `.env` file** in your project root:


2. **Add your API key**:

```env
REACT_APP_OMDB_API_KEY=your_actual_api_key_here

const apiKey = process.env.REACT_APP_OMDB_API_KEY;
fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=batman`);

npm start

.env
node_modules/
build/
MovieScope-react/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md

🧪 Running Locally

##  Clone the repository:

git clone https://github.com/harsh-034/MovieScope-react.git 

##  Navigate into the project directory:

cd MovieScope-react

##   Install dependencies:

npm install

##  Start the development server:

npm start

## 👤 Author
##   Harsh Gupta
🔗 GitHub: @harsh-034
🔗 LinkedIn: linkedin.com/in/harsh-034
