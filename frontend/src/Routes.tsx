import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

export const router =createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", 
            element: <Login/>},
            {path: "signup", 
            element: <Signup/>}
        ]
    }
])