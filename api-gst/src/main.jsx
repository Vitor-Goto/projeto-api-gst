import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Home from "./routes/Home.jsx"
import NewPost from "./routes/NewPost.jsx"
import Chamadodetails from "./routes/Chamadodetails.jsx"

import { RouterProvider, Route, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "api/chamados/:OS",
        element: <Chamadodetails />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
