import { createBrowserRouter } from "react-router-dom";
import RegiesterPage from "../pages/RegiesterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import App from "../App";

const router = createBrowserRouter([
{
    path : "/",
    element : <App />,
    children : [
        {
            path : "register",
            element : <RegiesterPage />
        }, 
        {
            path : 'email',
            element : <CheckEmailPage />
        }, 
        {
            path : 'password',
            element : <CheckPasswordPage />
        },
        {
            path : "",
            element : <Home />,
            children : [
                {
                    path : ':userId',
                    element : <MessagePage />
                }
            ]
        }
    ]
}
])

export default router