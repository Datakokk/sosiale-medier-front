import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Login } from "../pages/login/Login"
import { Profile } from "../pages/profile/Profile"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login />} />
        <Route path="/profile" element={ <Profile /> }/>
    </Routes>

  )
}
