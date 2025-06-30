# 📝 NoteFlow

A sleek MERN-based note-taking app with modern UI, and API rate limiting.

## 🚀 Features

- Create & delete notes
- Dark theme (DaisyUI)
- REST API (Express + MongoDB)
- Rate limiting (Upstash Redis)
- Responsive UI (TailwindCSS + React)

## 🛠 Tech Stack

**Frontend:** React, TailwindCSS, DaisyUI  
**Backend:** Express, MongoDB, Mongoose  
**Other:** Boxicons, Lucide, Upstash, Axios

## 🗂 Folder Structure

```
NoteFlow/
├── backend/    # Express API
├── frontend/   # React UI
```

## ⚙️ Setup

### Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend` and add:
```
PORT=5001
MONGO_URI=your_mongo_db_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

Start the backend:
```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 📦 API Endpoints

| Method | Route          | Description     |
|--------|----------------|-----------------|
| GET    | /api/notes     | Fetch all notes |
| POST   | /api/notes     | Create note     |
| DELETE | /api/notes/:id | Delete note     |

---
Give it a ⭐️ if you loved it !

---
Made with ❤️ by Aayush Parekh (https://github.com/Aayushsoni-1/NoteFlow)
