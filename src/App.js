import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register, NotFound } from './pages/index'
import Wrapper from './layout/Wrapper';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/home' element={<ProtectedRoute><Wrapper /></ProtectedRoute>} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
