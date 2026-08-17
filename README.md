# Online Library System

A modern Online Library System built with **React**, **Redux Toolkit**, **React Router**, and **Tailwind CSS**. The application allows users to browse books, search by title or author, filter by category, view detailed information, and add new books.

---

## Features

-  Home page with featured books
-  Browse all books
-  Search books by title or author
-  Filter books by category
-  View detailed information about each book
-  Add new books
-  State management using Redux Toolkit
-  Dynamic routing with React Router
-  Fully responsive design
-  Custom 404 Not Found page

---

## Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)
- Vite

---

## Folder Structure

```text
src/
│
├── assets/
├── components/
│   ├── BookCard.jsx
│   ├── BookList.jsx
│   ├── CategoryBar.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── SearchBar.jsx
│
├── data/
│   └── books.js
│
├── pages/
│   ├── Home.jsx
│   ├── BrowseBooks.jsx
│   ├── BookDetails.jsx
│   ├── AddBooks.jsx
│   └── NotFound.jsx
│
├── redux/
│   ├── store.js
│   └── booksSlice.js
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/vs1vikash-sing/Online_Library_System
```

Navigate to the project

```bash
cd online-library-system
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## Functionality

### Home

- Displays featured books
- Navigation to browse books
- Responsive hero section

### Browse Books

- Displays all books
- Category-based filtering
- Search by title or author

### Book Details

- Shows complete information of a selected book

### Add Book

- Add a new book using a form
- Updates Redux store instantly
- Redirects to Browse Books after submission

---

## Redux State

```javascript
{
  books: {
    books: []
  }
}
```

---

## Concepts Used

- Functional Components
- React Hooks
- useState
- useSelector
- useDispatch
- React Router
- Dynamic Routing
- Controlled Forms
- Redux Toolkit
- Conditional Rendering
- Array Methods (map, filter, find)
- Responsive UI with Tailwind CSS

---

## Responsive Design

The application is fully responsive and optimized for:

- Mobile
- Tablet
- Desktop

---

## Future Improvements

- Edit Book
- Delete Book
- Local Storage Persistence
- Backend Integration
- User Authentication
- Pagination
- Favorites
- Dark Mode

---

## Author

**Vikash Singh **

GitHub: https://github.com/vs1vikash-sing


-------------------------------------------------------

## License

This project is developed for learning and educational purposes.