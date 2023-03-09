import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import smartHomeData from './smartHomeData';
import Header from './components/Header';
import {backGround} from './../html-vzor/images/house.jpg'

const App = () => (
  <>
  <div className="container">
    <Header title={'Chytrá domácnost'}/>
  </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);