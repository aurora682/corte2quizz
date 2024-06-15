import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './paginas/home';
import VerQuizz from './paginas/verQuizz';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/quizz",
    element:<VerQuizz/>
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
