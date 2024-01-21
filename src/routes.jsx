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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signin" element={<Signin />}/>
                <Route 
                    path="/" 
                    element={auth ? <DefaultPage /> : <Navigate to='/signin'/>}
                >
                    <Route index element={<CreatePosts />} />
                    <Route path="/seePosts" element={<SeePosts />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp