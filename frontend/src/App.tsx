import { Routes, Route } from "react-router-dom"
import LayoutClient from "./layouts/LayoutClient"
import Home from "./pages/client/home"
import Login from "./pages/Login"
import LayoutDoctor from "./layouts/LayoutDoctor"
import "./App.css"
import GetAppointment from "./pages/client/GetAppointment"
import Dashboard from "./pages/doctor/Dashboard"
import ProtectedRoute from "./routes/ProtectedRoute"
import PublicRoute from "./routes/PublicRoute"
import Appointments from "./pages/doctor/Appointments"
function App() {

  return (
    <Routes>
      <Route index element={<LayoutClient> <Home /> </LayoutClient>} />
      <Route path="/get-appointment" element={<LayoutClient> <GetAppointment /> </LayoutClient>} />

      <Route path="/dashboard" element={
        <ProtectedRoute>
          <LayoutDoctor> <Dashboard /> </LayoutDoctor>
        </ProtectedRoute>
      } />
      <Route path="/appointment" element={
        <ProtectedRoute>
          <LayoutDoctor> <Appointments /></LayoutDoctor>
        </ProtectedRoute>
      } />

      <Route path="/login" element={
        <PublicRoute>
          <LayoutDoctor> <Login /> </LayoutDoctor>
        </PublicRoute>
      } />
      <Route path="*" element={<LayoutClient> <Home /> </LayoutClient>} />
    </Routes>
  )
}

export default App
