import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Error from './components/Error';
import ProjectPage from './pages/ProjectPage';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/Portfolio/" element={<HomePage />} />
        <Route path='/Portfolio/*' element={<Error />} />
        <Route path='/Portfolio/mes-projets/:id' element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);