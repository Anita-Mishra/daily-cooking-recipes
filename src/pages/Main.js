import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';
import HomeComponent from './Home';
import BreakfastComponent from './Breakfast';
import LunchComponent from './Lunch';
import DinnerComponent from './Dinner';
import CustomHeader from '../components/Header'
import Footer from '../components/Footer'

function Main() {
  return (
      <>
        <CustomHeader />
          <Routes>
            <Route path="/" element={<HomeComponent/>} />
            <Route path="/breakfast" element={<BreakfastComponent/>} />
            <Route path="/lunch" element={<LunchComponent/>} />
            <Route path="/dinner" element={<DinnerComponent/>} />
          </Routes>
        <Footer />
      </>
  );
}

export default Main;
