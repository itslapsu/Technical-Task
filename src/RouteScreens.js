import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import React from "react";

import { WebForm } from "./WebForm/WebForm";
import { Slider } from "./Slider/Slider";
import { Header } from "./Header/Header";

export default function RouteScreens() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/task3" element={<WebForm />} />
          <Route exact path="task4" element={<Slider />} />
        </Routes>
      </Router>
      <Outlet />
    </>
  );
}
