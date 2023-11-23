import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';

import './css/styles.css';
import CreateNewGlass from './pages/Glass';
import AddNewModelsToTheComapny from './pages/Model';
import OrderToHandleProducts from './pages/Order';
import ViewForItemFindIt from './components/seeFindProduct/viewOfItem';
import Companies from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
    errorElement:<h3>A donde vas?</h3>
  },
  {
    path:"/dashboard",
    element:<App/>
  },
  {
    path:"/empresas",
    element:<Companies/>
  },
  {
    path:"/vidrios",
    element:<CreateNewGlass/>
  },
  {
    path:"/modelos",
    element:<AddNewModelsToTheComapny/>
  },
  {
    path:"/orden",
    element:<OrderToHandleProducts/>
  },
  {
    path:"/item",
    element:<ViewForItemFindIt/>
  }

])
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
);

reportWebVitals();
