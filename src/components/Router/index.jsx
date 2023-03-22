import { createBrowserRouter } from 'react-router-dom';
import About from '../../pages/About';
import Error from '../../pages/Error';
// import Flat from '../../pages/Flat';
import Home from '../../pages/Home';
import Layout from '../Layout';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'About', element: <About /> },
      // { path: 'flat/:flatId', element: <Flat /> },
      { path: '*', element: <Error /> },
    ],
  },
]);

export default Router;