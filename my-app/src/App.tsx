import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage'; // Убедитесь, что путь к файлу правильный
import CommandPage from './pages/CommandPage';
import ServicePage from './pages/ServicePage';
import ProductsPage from './pages/ProductsPage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<CommandPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path = "/products" element = {<ProductsPage/>} />
      </Routes>
    </Router>
  )
}

export default App;