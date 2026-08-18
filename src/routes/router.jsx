import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Booklist from '../components/Booklist'
import BookDetails from '../components/BookDetails'
import AddBooks from '../components/AddBooks'
import BrowseBooks from '../components/BrowseBooks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Booklist />
      },
      {
        path: '/books',
        element: <BrowseBooks />
      },
      {
        path: '/add-books',
        element: <AddBooks />
      },
      {
        path: '/book-details/:id',
        element: <BookDetails />
      }
    ]
  }
])

export default router
