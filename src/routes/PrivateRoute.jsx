/* eslint-disable no-unused-vars */

import { Navigate, useLocation } from 'react-router-dom';
import { isLoggedIn } from '../services/auth.service';

export default function PrivateRoute({ children }) {
// const isLoggedIn = isLoggedIn()

const { pathname } = useLocation();

  if (!isLoggedIn()) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}