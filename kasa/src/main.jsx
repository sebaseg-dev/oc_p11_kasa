import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { router } from './Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
