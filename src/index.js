import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./store"
import { UserSignup, UserNav } from './components';


const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
  <Provider store={store}>
  <Routes>
    <Route path="/" element={<App />} ></Route>
    <Route path="/signup" element={<UserSignup />}></Route>
    <Route path="/homepage" element={<UserNav />}></Route>
  </Routes>
  </Provider>
  </BrowserRouter>,
  rootElement
)