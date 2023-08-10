import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/index.scss'
import AuthProvider from './contexts/UserContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      
      <App />
      
    </AuthProvider>
  </React.StrictMode>,
)
