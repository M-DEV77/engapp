import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import"./home.css";
export default function Home(){
    const navegar = useNavigate()
    const [login,setLogin] = useState('block')
    const [logout,setLogout]=useState('none')
    const [page,setPage]=useState('block')
    const [app,setApp]=useState('none')
    const [nav,setNav]=useState("/")
    
       
   
    useEffect(() => {
        const btnLogout  = document.getElementById("logout") 
        const btnLogin   = document.getElementById("login")
        const pageD       = document.getElementById("page")
        const appD        = document.getElementById("app")
        navegar(nav)
        pageD.style.display=page;
        appD.style.display=app;
        btnLogin.style.display=login;
        btnLogout.style.display=logout;
        

        btnLogin.addEventListener('click',()=>{
            setLogin("none")
            setLogout("block")
            setPage("none")
            setApp("block")
            
            setNav("/app")
         })
        
     
        btnLogout.addEventListener('click',()=>{
            setLogin("block")
            setLogout("none")
            setPage("block")
            setApp("none")
             })

      }),[navegar];

    return(
    <>
    <title>ENGAPP-LOGIN</title>
    <div className="content">
         <div className="cardLogin">
           
         </div>
    </div>
    </>
    )
} 