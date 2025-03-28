import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage'; // Убедитесь, что путь к файлу правильный
import RightsPage from './pages/RightsPage';
import ProductPage from './pages/ProductPage';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path ="/rights" element = {<RightsPage/>}/>
        <Route path = "/products/:productName" element = {<ProductPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;