import Events from "./pages/Events";
import LandingPage from "./pages/LandingPage";
import Teams from "./pages/Teams";
import { Router, useRoutes } from "react-router-dom";
export default function App() {
    const CustomRoutehandler = () => {
        const routes = useRoutes([
            {
                path: "/home",
                element: <LandingPage />,
            },
            {
                path: "/home/events",
                element: <Events />,
            },
            {
                path: "/home/Teams",
                element: <Teams />
            }
        ]);

        return routes;
    };

    return (
        <div>
            <CustomRoutehandler />
        </div>
    );
}
