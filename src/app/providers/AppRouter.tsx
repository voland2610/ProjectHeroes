import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "~/app/layouts/AppLayout";
import CharacterDetailsPage from "~/pages/CharacterDetailsPage";
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
        path: "/characters/:id",
        element: <CharacterDetailsPage />,
      },
      // TODO | 06.07.2026: Создать страничку отдельно персонажа.
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);
