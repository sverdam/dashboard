import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import DashboardPage from '../pages/DashboardPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
        { index: true,               element: <DashboardPage /> }
        ]
    }
]);

export default router;