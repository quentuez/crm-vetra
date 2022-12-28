import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-blue-50">
      <Header />
      <Nav />
      <Aside />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
