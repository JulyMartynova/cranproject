import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage'; // Убедитесь, что путь к файлу правильный
import CommandPage from './pages/CommandPage';
import ServicePage from './pages/ServicePage';

const App: React.FC = () => {
  return (
    // <Routes>
    //   <Route path="/" element = {<MainPage/>} />
    //   <Route path="/about" element = {<CommandPage/>} />
    // </Routes>
    <div>
      <MainPage />
    </div>
  )
}

export default App;