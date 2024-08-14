import { Routes,Route ,Navigate} from "react-router-dom"

import { LoginPage } from "../auth"
import { HeroresRoutes  } from "../heroes";

import { Navbar } from "../ui"


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/*" element={<HeroresRoutes/>}/>
    </Routes>
    </>
  )
}
