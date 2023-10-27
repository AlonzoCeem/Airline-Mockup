import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';

const App = ()=> {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
