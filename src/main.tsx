import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { inject } from '@vercel/analytics'

// Initialize Vercel Web Analytics
inject()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
)
