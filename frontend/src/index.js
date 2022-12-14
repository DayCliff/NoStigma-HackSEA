import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Questionnaire from './components/Questionnaire/Questionnaire';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Page from './components/Page/Page';
import Results from './components/Results/Results';

export const headerLinks = [
  {
    path: '/about',
    title: 'About',
    element: <Home />,
    background: "/images/heart-icon.png"
  },
  {
    path: '/resources',
    title: 'Resources',
    element: <Home />,
    background: "/images/heart-icon.png"
  },
  {
    path: '/contact',
    title: 'Contact',
    element: <Home />,
    background: "/images/heart-icon.png"
  }
];

const routes = [
  {
    path: '/',
    title: 'Home',
    element: <Home />,
    background: "/images/heart-icon.png"
  },
  {
    path: '/questionnaire',
    title: 'Questionnaire',
    element: <Questionnaire />,
    background: "/images/heart-icon.png"
  },
  {
    path: '/results/anxious',
    title: 'Results',
    element: <Results category="anxious" />,
    background: "/images/heart-icon-red.png"
  },
  {
    path: '/results/depressed',
    title: 'Results',
    element: <Results category="depressed" />,
    background: "/images/heart-icon-red.png"
  },
  {
    path: '/results/suicidal',
    title: 'Results',
    element: <Results category="suicidal" />,
    background: "/images/heart-icon-red.png"
  },
  {
    path: '/results/normal',
    title: 'Results',
    element: <Results category="normal" />,
    background: "/images/heart-icon-green.png"
  },
  ...headerLinks
];

const router = createBrowserRouter(
  routes.map((r) => {
    return {
      path: r.path,
      title: r.title,
      element: <Page content={r.element} background={r.background} />
    }
  })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
