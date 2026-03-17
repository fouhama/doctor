import { Routes, Route } from "react-router-dom"
import LayoutClient from "./layouts/LayoutClient"
import LayoutDoctor from "./layouts/LayoutDoctor"
import Home from "./pages/client/home"
import GetAppointment from "./pages/client/GetAppointment"
import Dashboard from "./pages/doctor/Dashboard"
import Appointments from "./pages/doctor/Appointments"
import Login from "./pages/Login"
import ProtectedRoute from "./routes/ProtectedRoute"
import PublicRoute from "./routes/PublicRoute"
import "./App.css"
import Setting from "./pages/doctor/Setting"

function App() {
  return (
    <Routes>

      {/* Client pages */}
      <Route path="/" element={<LayoutClient><Home /></LayoutClient>} />
      <Route path="/get-appointment" element={<LayoutClient><GetAppointment /></LayoutClient>} />

      {/* Doctor protected routes */}
      <Route element={
        <ProtectedRoute>
          <LayoutDoctor />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="appointment" element={<Appointments />} />
        <Route path="setting" element={<Setting />} />
      </Route>

      {/* Login */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<LayoutClient><Home /></LayoutClient>} />

    </Routes>
  )
}

export default App