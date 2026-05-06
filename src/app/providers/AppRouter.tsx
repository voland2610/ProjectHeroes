import { createBrowserRouter } from "react-router-dom"
import Characters from "~/pages/Characters"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
  },
])