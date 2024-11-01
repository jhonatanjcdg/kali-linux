import React from 'react';
import {Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ContentManagement from './components/ContentManagement';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './styles.css';
import InstallKali from './components/InstallKali';
import KaliHistory from './components/KaliHistory';
import CommentsAndAuthors from './components/CommentsAndAuthors';

const App = () => {
  return (
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/installKali" element={<InstallKali/>} />
          <Route path="/home" element={<Hero/>} />
          <Route path="/content" element={<ContentManagement/>} />
          <Route path="/history" element={<KaliHistory/>} />
          <Route path="/authors" element={<CommentsAndAuthors/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/*" element={<Dashboard/>} />
        </Routes>
      </div>
  );
};

export default App;
