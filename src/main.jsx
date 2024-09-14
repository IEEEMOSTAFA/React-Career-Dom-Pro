import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import AppliedJobs from './components/Appliedjobs/Appliedjobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
        loader: () => fetch('/jobs.json') //warning: only load the data you need .do not load all the data
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        // Assuming the jobs.json is in the public folder:
        loader: () => fetch('/jobs.json')  // Do not load all data load only what you need
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
