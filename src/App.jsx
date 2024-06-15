import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './paginas/home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
