import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Questionnaire from './components/Questionnaire/Questionnaire';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';

export const headerLinks = [
  {
    path: '/about',
    title: 'About',
    element: <Home />
  },
  {
    path: '/resources',
    title: 'Resources',
    element: <Home />
  },
  {
    path: '/contact',
    title: 'Contact',
    element: <Home />
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    title: 'Home',
    element: <Home />
  },
  {
    path: '/questionnaire',
    title: 'Questionnaire',
    element: <Questionnaire />
  },
  ...headerLinks
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
