import { Routes ,Route} from "react-router-dom"
import LayoutClient from "./layouts/LayoutClient"
import Home from "./pages/client/home"

function App() {
  return (
    <Routes>
      <Route index  element={<LayoutClient> <Home/> </LayoutClient>} />
      <Route path="*"  element={<LayoutClient> <Home/> </LayoutClient>} />
    </Routes>
  )
}

export default App
