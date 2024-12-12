import ReactDOM from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  children: [
  {
    index: true,
    path: '/About',
    element: <About />,
  },
  {
    path: '/Portfolio',
    element: <Portfolio />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/Resume',
    element: <Resume />,
  }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
