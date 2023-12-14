import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import '../src/input.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
