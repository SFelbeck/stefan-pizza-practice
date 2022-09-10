import './App.css';
import React from "react";
import Header from './components/header/index';

import IntroPage from "./components/introScreen/index";
import Menu from './components/menu';
import OrderMenu from './components/orderMenu';
import Toppings from './components/toppings';
import PzaSize from './components/pizzaSize';
import Addons from './components/additionalItems';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/OrderMenu" element={<OrderMenu />} />
      <Route path="/Toppings" element={<Toppings />} />
      <Route path="/pzaSize" element={<PzaSize />} />
      <Route path="/Addons" element={<Addons />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
