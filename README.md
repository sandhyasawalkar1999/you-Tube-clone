# 🎬 YouTube Clone in React

A fully responsive **YouTube Clone** built using **React.js**, featuring video search, trending videos, video details, and more. This project replicates core YouTube functionalities using the **Rapid Api**.

---

## 🚀 Features

- 🔍 **Search Videos** – Users can search for videos dynamically.
- 🎥 **Video Playback** – Displays video details like title, views, likes, and description.
- 🎭 **Related Videos** – Suggests similar videos based on the current selection.
- 🔄 **Debounced Search** – Optimizes API calls to avoid excessive requests.
- 📱 **Fully Responsive** – Works on desktop, tablet
- 🏎️ **Fast Loading** – Uses lazy loading, Axios caching, and optimized API calls.

---

## 🛠 Tech Stack

- **Frontend:** React.js, React Router, Context API
- **Styling:** Tailwind CSS 
- **API Requests:** Axios
- **Routing:** React Router
- **Build Tool:** Vite 
- **State Management:** Context API 
- **Deployment:** Vercel

---

## 📂 Project Structure

/src ├── components # Reusable UI components (Navbar, VideoCard, Sidebar, etc.) 
     ├── pages # Main pages (Home, VideoDetail, SearchResults) 
     ├── context # Global state management using Context API
     ├── api # API functions for fetching data ├── assets # Images and icons 
     ├── utils # Helper functions 
     ├── App.js # Main application entry point 
     ├── index.js # React DOM rendering

## 🔗 API Used

The project uses **YouTube Data API v3** (or a third-party alternative like RapidAPI’s YouTube API) to:
- Fetch **trending videos**
- Perform **video searches**
- Retrieve **video details** (title, description, likes, views, etc.)
- Get **related videos**

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sandhyasawalkar1999/you-tube-clone.git
cd youtube-clone


🔧 Future Enhancements
🔐 User Authentication – Sign-in with Google OAuth.
💬 Comment System – Display YouTube comments dynamically.
🕒 Watch History & Watch Later – Save user preferences.
📡 Live Streaming Support – Fetch live videos from YouTube API.
📱 Progressive Web App (PWA) – Make it installable on mobile.

✨ Author
Developed by Sandhya Sawalkar 🚀
