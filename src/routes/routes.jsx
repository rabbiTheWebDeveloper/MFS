import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import History from "../pages/History";
import UserList from "../pages/UserList";
import AgentList from "../pages/AgentList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/agent/login",
    element: <SignIn />,
  },
  {
    path: "/admin/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/agent/signup",
    element: <SignUp />,
  },
  {
    path: "/admin/signup",
    element: <SignUp />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/users-list",
    element: <UserList />,
  },
  {
    path: "/agents-list",
    element: <AgentList />,
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;
