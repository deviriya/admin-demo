import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import ForgotPassword from './pages/Forgotpassword/forgotpassword'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
