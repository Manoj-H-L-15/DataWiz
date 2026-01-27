import Events from "./pages/Events";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Teams from "./pages/Teams";
import { Router, useRoutes } from "react-router-dom";
export default function App() {
    const CustomRoutehandler = () => {
        const routes = useRoutes([
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/events",
                element: <Events />,
            },
            {
                path: "/Teams",
                element: <Teams />
            },
            {
                path: "*",
                element: <NotFound />
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
