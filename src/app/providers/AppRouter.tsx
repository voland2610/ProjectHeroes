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
      // TODO | 06.07.2026: Создать страничку отдельно персонажа.
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);
