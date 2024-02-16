import { BrowserRouter , Routes , Route , Navigate  } from "react-router-dom"

import Login from "./pages/Login"
import Singup from "./pages/Singup"

import { AuthContext } from './contexts/AuthContext'
import { useContext } from "react"
import DefaultPage from "./components/DefaultPage"
import CreatePosts from "./pages/CreatePosts"
import SeePosts from "./pages/SeePosts"


const RoutesApp = () => {

    const { auth } = useContext(AuthContext)
    const isAuthenticated = Boolean(auth?.token);

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={isAuthenticated ? <DefaultPage /> : <Navigate to='/signup'/>}
                >
                    <Route path="/createposts" element={<CreatePosts />} />
                    <Route path="/seeposts" element={<SeePosts />} />

                </Route>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Singup />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp