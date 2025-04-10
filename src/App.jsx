import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import theme from './theme';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Photos from './pages/Photos';
import './App.css';

function App() {
  return (
    <ConfigProvider theme={{ token: theme.token }}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
