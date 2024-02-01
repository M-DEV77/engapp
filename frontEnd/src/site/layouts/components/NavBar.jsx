import { Link } from "react-router-dom"
const logo = "./img/logo engapp2.png"
import "./navBar.css"
export default function NavBar(){
    return(
      <nav>
           <img id="logo" src={logo} alt="logo" />
           <Link className="" to="/">ENGAPP</Link>
           
           <div id="page">
              <Link  to="/doc">DOCUMENTO</Link>
              <Link  to="/sobre">SOBRE</Link>
           </div>
           <div id="app">
              <Link  to="/App">APP</Link>
              <Link  to="/pilar">PILAR</Link>
              <Link  to="/viga">VIGA</Link>
              <Link  to="/fundacao">FUNDAÇÃO</Link>
              <Link  to="/user">USER</Link>
           </div>
           <Link id="login">LOGIN</Link>
           <Link id="logout" >SAIR</Link>
           
          
      </nav> 
    )
}