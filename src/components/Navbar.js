import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/shop"}>Shop</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/new"}>New</NavLink>
        </nav>
    )
}