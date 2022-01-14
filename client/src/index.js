import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Survey from './Survey/Survey';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Results from './Results/Results';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/share/:id" element={<Survey/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
