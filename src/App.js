import React, { useState } from 'react';
import './App.css';
import Main from './Main';
import { Route, Routes } from 'react-router-dom';
import Detail from "./Detail";




const App = (props) => {

  return (
      <Routes>
        <Route path="/Detail/:day_list" element={<Detail />}></Route>
        <Route path="/"  element={<Main />}></Route>
      </Routes>
  );
}
export default App;