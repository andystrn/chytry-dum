import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'; 
import smartHomeData from './smartHomeData';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  <>
  <div className="container">
    <Header title={'Chytrá domácnost'}/>
    <Dashboard data={smartHomeData}/>
  </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);