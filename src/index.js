import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';
import wupk2 from './img/wupk.jpg';
import moon from './img/moon.jpg';
import smitlogo from './img/smit.jpg';
import postimage from './img/training.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <App name="Faizan" image={logo} alt="React Logo" time="June 6 at 8:00 AM" post="Discover React!" postImg={logo}/>

    <App name="Weather Updates PK" image={wupk2} alt="React Logo" time="August 24 at 3:18 PM" post="Super Moon of 14th Safar, 1445 Hijri (Dated 30.08.2023)" postImg={moon}/>

    <App name="Saylani Mass IT Training" image={smitlogo} alt="React Logo" time="August 22 at 6:00 PM" post="3D Visualization Final Exams are ongoing. Finalized Students would be provided jobs as we promised initially." postImg={postimage}/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
