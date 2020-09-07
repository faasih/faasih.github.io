import React from "react";
//import logo from "./logo.svg";
import "./App.css";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <Slider />
      <AboutUs />

      {/* <ProfileCard
        name="Fasih Sheikh"
        designation="Jr"
        description="The function above is actually an anonymous function (a function without a name).
Functions stored in variables do not need function names. They are always invoked (called) using the variable name."
        imageUrl={logo}
      />
      <ProfileCard
        name="Aman Ullah"
        designation="King"
        description="The function above is actually an anonymous function (a function without a name).
Functions stored in variables do not need function names. They are always invoked (called) using the variable name."
      /> */}
    </div>
  );
}

export default App;
