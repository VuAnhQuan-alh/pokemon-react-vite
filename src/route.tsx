import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Pokemon from "./pages/pokemon";
import Profile from "./pages/profile";
import { PeopleProvider } from "./context/context-people";

const RouterMain = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/game",
      element: <Pokemon />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    <PeopleProvider>
      <RouterProvider router={router} />;
    </PeopleProvider>
  );
};
export default RouterMain;
