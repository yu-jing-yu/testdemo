import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Photos from './pages/Photos';
import './App.css';

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
