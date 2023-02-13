import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Router = () => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/buttons">Buttons</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
}