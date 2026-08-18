import { createStore } from 'redux'

const initialState = {
  books: [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      rating: 4.8,
      pages: 281,
      coverImage: "https://images.unsplash.com/photo-1543002588-d4d8c5e83c8d?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-Help",
      rating: 4.7,
      pages: 328,
      coverImage: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Non-Fiction",
      rating: 4.6,
      pages: 180,
      coverImage: "https://images.unsplash.com/photo-1536496971421-b8a0aeb51d86?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      category: "Self-Help",
      rating: 4.9,
      pages: 279,
      coverImage: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=400&h=600&fit=crop"
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload]
      }
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
