import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} ></Route>
  </Routes>
  </BrowserRouter>,
  rootElement
)