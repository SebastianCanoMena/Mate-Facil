import React from 'react'
import './App.css';
import Layout from './components/Layout';
import Body from './components/Body'
import Get from './processes/get'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
