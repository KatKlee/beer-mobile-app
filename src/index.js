import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StartApp from './pages/startpage/StartApp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeersOverview from './pages/overview/BeersOverview';
/* import BeerRandom from './pages/beer_random_detail/BeerRandom'; */
import BeerDetail from './pages/beer_detail/BeerDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartApp />} />
        <Route path='/beers' element={<BeersOverview />} />
        <Route path='/beers/:beerid' element={<BeerDetail />} />
        {/* <Route path='/beers/random' element={<BeerRandom />} /> */}
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
