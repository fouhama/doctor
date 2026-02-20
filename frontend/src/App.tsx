import { Routes ,Route} from "react-router-dom"
import LayoutClient from "./layouts/LayoutClient"
import Home from "./pages/client/home"
import Login from "./pages/Login"
import LayoutDoctor from "./layouts/LayoutDoctor"
import  "./App.css"
import Appointment from "./pages/client/Appointment"
function App() {
  return (
    <Routes>
      <Route index  element={<LayoutClient> <Home/> </LayoutClient>} />
      <Route path="/appointment"  element={<LayoutClient> <Appointment/> </LayoutClient>} />
      <Route path="/login"  element={<LayoutDoctor> <Login/> </LayoutDoctor>} />
      <Route path="*"  element={<LayoutClient> <Home/> </LayoutClient>} />
    </Routes>
  )
}

export default App
