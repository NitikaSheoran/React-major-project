import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Protected from './Components/AuthLayout.jsx'
import Login from './Components/Login.jsx'
import SignUp from './Components/SignUp.jsx'
import AllPost from './Pages/AllPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
import AddPost from './Pages/AddPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <Protected authetication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: '/signUp',
        element: (
          <Protected authetication={false}>
            <SignUp />
          </Protected>
        )
      },
      {
        path: "/all-posts",
        element: (
          <Protected authetication>
            {" "}
            <AllPost />
          </Protected>
        )
      },
      {
        path: "/add-post",
        element: (
            <Protected authentication>
                {" "}
                <AddPost />
            </Protected>
        ),
    },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authetication>
            {" "}
            <EditPost />
          </Protected>
        )
      },
      {
        path: "post/:slug",
        element: <Post />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
