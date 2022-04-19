import './App.css';
import React from 'react';
import './index.css';
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserNav, UserSignup, ProfilePage, CreateProfile, Loginpage, Clinics, IndividualClinic, Appointments, BookApptForm, BookAppt, EditAppt } from './components';

//Redux
import { Provider } from "react-redux"
import store from "./store"
import setAuthToken from './utils/setAuthToken';

if(sessionStorage.token) {
  setAuthToken(sessionStorage.token)
}

function App() {


  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
        <Route path="/" element={<UserNav />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/clinic/:clinicId" element={<IndividualClinic />} />
          <Route path="/appointment" element={<Appointments />} />
        </Route>
        <Route path="/login" element={<Loginpage />} ></Route>
        <Route path="/signup" element={<UserSignup />}></Route>
        <Route path="/createprofile" element={<CreateProfile />}></Route>
        <Route path="/editappt" element={<EditAppt />}></Route>
        <Route path="/makeappt/:id" element={<BookAppt />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
    
  );
}

export default App;
