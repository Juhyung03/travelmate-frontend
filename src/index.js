import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/HomePage';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import InfoMain from "./pages/InfoMain";
import InfoArea from "./pages/InfoArea";
import InfoPlace from"./pages/InfoPlace";
import ScrollToTop from './ScrollToTop';
import LoginPage from './pages/UserLoginPage';
import TestPage from './pages/TestPage';
import ProtectedRoute from './components/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/loginPage', element: <LoginPage /> },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/InfoMain',
        element: <InfoMain />,
      },
      {
        path: '/InfoArea',
        element: <InfoArea />,
      },
      {
        path: '/InfoPlace',
        element: <InfoPlace />,
      },
      { path: '/testpage', element: <ProtectedRoute element={<TestPage />} /> },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
        <RouterProvider router={router} />
      
    
  </React.StrictMode>
);





