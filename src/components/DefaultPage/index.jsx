import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"
import Logout from "../Logout"

const DefaultPage = () => {
    return (
        <>
            <Logout />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default DefaultPage