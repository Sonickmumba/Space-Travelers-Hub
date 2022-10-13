import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Rocket from './components/rockets/Rocket';
import Profile from './components/profile/Profile';
import MissionLists from './components/mission/Mission';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/rocket" element={<Rocket />} />
      <Route path="/mission" element={<MissionLists />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
