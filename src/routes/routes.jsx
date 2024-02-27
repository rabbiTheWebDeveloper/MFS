import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import History from "../pages/History";
import UserList from "../pages/UserList";
import AgentList from "../pages/AgentList";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    //   {
    //     path: '/products',
    //     element: <Products />,
    //   },
    //   {
    //     path: '/product-details/:id',
    //     element: <ProductDetails />,
    //   },
    //   {
    //     path: '/checkout',
    //     element: <Checkout />,
    //   },
    // ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/history",
    element: (
      <PrivateRoute>
        <History />
      </PrivateRoute>
    ),
  },
  {
    path: "/users-list",
    element: (
      <PrivateRoute>
        <UserList />
      </PrivateRoute>
    ),
  },
  {
    path: "/agents-list",
    element: (
      <PrivateRoute>
        <AgentList />
      </PrivateRoute>
    ),
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;
