import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import FirstPage from './Components/FirstPage/FirstPage';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Comments from './Components/Comments/Comments';
import CommentDetail from './Components/CommentDetail/CommentDetail';

// const AppRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Default page</div>
//   },
//   {
//     path: '/about-app',
//     element: <App></App>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   }
// ])

const AppRouter = createBrowserRouter([
  {
   path: '/',
   element: <Home></Home>,
   children: [
    {
      path: '/',
      element: <FirstPage></FirstPage>
    },
    {
      path: '/friends',
      element: <Friends></Friends>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
    },
    {
      path: '/friend/:Id',  // Use anything as 'Id' after /:
      element: <FriendDetails></FriendDetails>,
      // loader: ({params}) => console.log(params.Id) // Id from Ln 52
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.Id}`)
    },
    {
      path: 'about',
      element: <About></About>,
    },
    {
      path: 'comments',
      element: <Comments></Comments>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/comments')
    },
    {
      path: 'comment/:commentId',
      element: <CommentDetail></CommentDetail>,
      // loader: ({params}) => console.log(params.Id)
      loader: (params) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
    },
    {
      path: 'contact',
      element: <Contact></Contact>,
    }
   ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {AppRouter}></RouterProvider>
  </React.StrictMode>,
)
