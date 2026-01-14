import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 style={{ padding: 20 }}>Portfolio is live ✅</h1>
  </StrictMode>,
)
