# 🎬 Movie WatchList App

**Version:** [React] [Tailwind CSS] [TMDB API]

A simple and intuitive Movie WatchList application built with React. Users can search for movies via the TMDB API, add them to their personal watchlist, mark them as watched, or move them back to the watchlist. The app uses local storage for persistence and has a clean responsive UI.

---

## Features ✅

- 🔍 Search for movies using the **TMDB API**.
- ➕ Add movies to your **WatchList**.
- 👀 Mark movies as **Watched**.
- 🔄 Move movies back from Watched to WatchList.
- ❌ Remove movies from either list.
- 💾 Data persists using **LocalStorage**.
- 📱 Responsive design with a clean and modern UI.

---

## Technologies Used 🛠️

- **React** (functional components + hooks + context API)
- **Axios** (for fetching data from TMDB API)
- **React Router DOM** (for navigation)
- **Tailwind CSS** (for styling and responsive layout)
- **TMDB API** (for movie data)

---

## Installation 💻

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env` file in the root folder and add your **TMDB API key**:

```bash
REACT_APP_TMDB_KEY=your_api_key_here
```

---

## Usage 📝

Start the development server:

```bash
npm start
```

1. Navigate to `/add` and search for a movie.
2. Add movies to your **WatchList**.
3. Move movies to **Watched** once you’ve seen them.
4. Remove or transfer movies between lists anytime.

---

## Folder Structure 📁

```
/src
  /components
    Add.jsx
    Header.jsx
    MovieCard.jsx
    MovieControls.jsx
    Watched.jsx
    WatchList.jsx
    WatchListCard.jsx
  /context
    AddReducer.js
    GlobalState.js
  App.js
  index.js
  index.css
```

---

## Author 👤

**Hamza Alkhader**

- GitHub: [@hamza-kh2003](https://github.com/hamza-kh2003)
- LinkedIn: [Hamza Alkhader](https://www.linkedin.com/in/hamza-alkhader-39424527b/)

---

## Show your support ⭐

If you found this project useful, please give it a ⭐️!
