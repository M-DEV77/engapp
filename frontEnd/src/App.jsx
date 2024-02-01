import"../src/app.css"
import { Outlet } from "react-router-dom"
import NavBar from "./site/layouts/components/NavBar"
import Footer from "./site/layouts/components/Footer"

function App() {
  
  return (
    <div className="container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
