import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Suspense } from 'react'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<h1 className='text-2xl'>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
)