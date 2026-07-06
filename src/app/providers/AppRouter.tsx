import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "~/app/layouts/AppLayout";
import Characters from "~/pages/Characters";
import FavoritesPage from "~/pages/FavoritesPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Characters />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);