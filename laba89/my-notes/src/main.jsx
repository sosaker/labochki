import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)