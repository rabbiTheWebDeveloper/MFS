import { createBrowserRouter } from 'react-router-dom';
import App from '../App';





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
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/signup',
  //   element: <Signup />,
  // },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;