import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={routes} />
     <ToastContainer/>
    </Provider>
  </React.StrictMode>
);
