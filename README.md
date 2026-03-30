# AI Image Generator (MERN Stack)

## Overview

This project is a full-stack AI Image Generator application built using the MERN stack. It allows users to enter a text prompt and generate an image based on that prompt. The application demonstrates frontend-backend integration, API handling, and a clean user interface using modern web technologies.

Currently, the application uses a fallback image system for demonstration purposes. It is structured in a way that allows easy integration of real AI image generation APIs in the future.

---

## Features

- Generate images based on user prompts
- Responsive and modern UI using Tailwind CSS
- Separate pages for Home and History
- View previously generated images in history
- Backend API integration using Express
- Error handling and fallback mechanism

---

## Tech Stack

### Frontend

- React (with TypeScript)
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Other Tools

- Git and GitHub for version control

---

## Project Structure

```
AiImageGenerationApp/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   └── main.tsx
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## Installation and Setup

### Clone the repository

```
git clone https://github.com/your-username/AI-Image-Generator.git
cd AI-Image-Generator
```

---

### Setup Backend

```
cd Backend
npm install
npm start
```

The backend will run on:

```
http://localhost:5000
```

---

### Setup Frontend

Open a new terminal:

```
cd AiImageGenerationApp
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## API Endpoint

### Generate Image

```
POST /generate
```

Request body:

```
{
  "prompt": "your text here"
}
```

Response:

```
{
  "image": "image-url"
}
```

---

## Future Improvements

- Integrate real AI image generation APIs
- Add user authentication
- Store history in a database (MongoDB)
- Download generated images
- Improve UI animations and transitions

---

## Author

Amna Naeem
