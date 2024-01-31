import { Link } from "react-router-dom"
import "./navBar.css"
export default function NavBar(){
    return(
      <nav>
           <Link to="/">HOME</Link>
           <Link to="/App">APP</Link>
           <Link to="/pilar">PILAR</Link>
           <Link to="/viga">VIGA</Link>
           <Link to="/fundacao">FUNDAÇÃO</Link>
           <Link to="/user">USER</Link>
          
      </nav> 
    )
}