import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./site/pages/Home.jsx"
import PageApp from "./site/pages/PageApp.jsx"
import ErroPage from './site/pages/ErroPage.jsx';
import Viga from './site/pages/Viga.jsx';
import Pilar from './site/pages/Pilar.jsx';
import Fundacao from './site/pages/Fundacao.jsx';
import User from './site/pages/User.jsx';
const router = createBrowserRouter([
{
  path: "/",
  element:<App />,
  errorElement:<ErroPage />,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/app",
      element:<PageApp/>
    },
    {
      path:"/pilar",
      element:<Pilar/>
    },
    {
      path:"/viga",
      element:<Viga/>
    },
    {
      path:"/fundacao",
      element:<Fundacao/>
    },
    {
      path:"/user",
      element:<User/>
    }
  ]
},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
