import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Importa o componente RouterProvider da biblioteca react-router-dom
import { RouterProvider } from "react-router-dom" 

// Importa o componente de roteamento criado
import meuRouter from "./AppRoutes.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Utiliza o componente RouterProvider para prover o roteamento da aplicação */}
    <RouterProvider router={meuRouter} />
  </StrictMode>,
)