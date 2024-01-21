import { BrowserRouter , Routes , Route , Navigate  } from "react-router-dom"

import Login from "./pages/Login"
import Signin from "./pages/Singin"
import Home from "./pages/Home"

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
                    element={isAuthenticated ? <DefaultPage /> : <Navigate to='/signin'/>}
                >
                    <Route path="/createposts" element={<CreatePosts />} />
                    <Route path="/seeposts" element={<SeePosts />} />

                </Route>
                <Route path="/login" element={<Login />}/>
                <Route path="/signin" element={<Signin />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp