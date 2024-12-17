import Footer from "./Components/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";

export function Layout() {

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            {
                !isHomePage && <Navbar />
            }
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}