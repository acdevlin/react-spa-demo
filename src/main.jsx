import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
          {/* App component wraps around all pages */}
          <Route path="*" element={<App />} />
        </Routes>
    </Router>
  </StrictMode>,
)
