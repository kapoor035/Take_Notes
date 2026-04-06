# 📝 TakeNotes – Smart Note Taking App

A full-stack note-taking web application built using modern web technologies. This project allows users to create, organize, and manage notes efficiently, along with some smart features like AI assistance and real-time updates.

---

## 🚀 Features

### ✍️ Note Editor

- Create and edit notes using a markdown editor
- Supports basic formatting (bold, italic, headings, lists, etc.)
- Live preview mode
- Auto-save functionality

### 📂 Note Organization

- Create and manage categories
- Move notes between categories
- Search and filter notes

### ⭐ Additional Features

- Mark notes as favorites
- Trash system with restore option
- Permanent delete functionality

### 🔄 Real-Time Updates

- Notes sync across tabs and devices
- Automatic updates using backend services

### 🤖 AI Features

- Summarize notes
- Rephrase content
- Translate text
- Suggest tags

### 🎨 User Interface

- Clean and responsive design
- Works on mobile and desktop
- Light/Dark mode support

### 🔐 Authentication

- User signup and login
- Secure data handling
- Password reset functionality

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS

### Backend

- Supabase (Database, Authentication, Realtime)

### AI Integration

- Google Gemini API

### Other Tools

- Zustand (State Management)
- React Hook Form

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm or yarn
- Supabase account
- Google Gemini API key

### Installation

1. Clone the repository

   ```bash
   git clone <your-repo-link>

   2.	Navigate to the project folder
   ```

cd TakeNotes

    3.	Install dependencies

npm install

    4.	Create a .env.local file and add:

NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
GEMINI_API_KEY=your_api_key

    5.	Run the development server

npm run dev

⸻

🗄️ Database Overview
• Notes stored with categories
• User-based access control
• Basic AI interaction tracking

⸻

📌 Project Purpose

This project was developed as part of learning full-stack web development. It focuses on integrating frontend, backend, and basic AI features into a single application.

⸻

📈 Future Improvements
• Enhanced collaboration features
• More AI-based tools
• UI/UX improvements
• Performance optimization

⸻

📄 License

This project is for educational purposes.

---
