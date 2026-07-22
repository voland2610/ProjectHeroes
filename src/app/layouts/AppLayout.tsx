import { Outlet } from "react-router-dom";
import { Header } from "~/widgets/header/Header";

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};