import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./store"
import { UserSignup, CreateProfile, Loginpage, Clinics, IndividualClinic, Appointments, PrivateUser } from './components';


const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PrivateUser><App /></PrivateUser>}>
          <Route path="/profile" element={<CreateProfile />} />
          <Route path="/clinic" element={<Clinics />} />
          <Route path="/clinic/:clinicId" element={<IndividualClinic />} />
          <Route path="/appointment" element={<Appointments />} />
        </Route>
        <Route path="/login" element={<Loginpage />} ></Route>
        <Route path="/signup" element={<UserSignup />}></Route>

      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
)