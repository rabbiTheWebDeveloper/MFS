import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';





const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
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
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;