import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './pages/Sobre.jsx'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'
import Servicos from './pages/Servicos.jsx'
import Contatos from './pages/Contatos.jsx'
import Erro from './pages/Erro.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <ConteudoPrincipal/>
      },
      {
        path: "/sobre", 
        element: <Sobre/>
      },
      {
        path: "/servicos",
        element: <Servicos/>
      },
      {
        path: "/contatos",
        element: <Contatos/>
      },
      {
        path: "*",
        element: <Erro/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
