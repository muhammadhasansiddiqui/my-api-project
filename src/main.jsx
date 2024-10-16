import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SingersList from './SingersList.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SingersList />
  </StrictMode>,
)
