import './App.css';
import React, { useEffect } from 'react';
import './index.css';
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserNav, UserSignup, ProfilePage, CreateProfile, Loginpage, Clinics, IndividualClinic, Appointments, BookApptForm, BookAppt, EditAppt } from './components';
import { blue } from "@ant-design/colors"

//Redux
import { Provider } from "react-redux"
import store from "./store"

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
        <Route path="/" element={<UserNav />}>
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/clinic/:clinicId" element={<IndividualClinic />} />
          <Route path="/appointment" element={<Appointments />} />
        </Route>
        <Route path="/login" element={<Loginpage />} ></Route>
        <Route path="/signup" element={<UserSignup />}></Route>
        <Route path="/appt/edit/:apptId" element={<EditAppt />}></Route>
        <Route path="/appt/:clinicid/:userid" element={<BookAppt />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
    
  );
}

export default App;
