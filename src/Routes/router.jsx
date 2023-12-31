import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router;