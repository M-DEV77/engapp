
import { Outlet } from "react-router-dom"
import NavBar from "./site/layouts/components/NavBar"

function App() {
  
  return (
    <div className="container">
      <NavBar />
      
      <Outlet />
      <h1>footer</h1>
    </div>
  )
}

export default App
