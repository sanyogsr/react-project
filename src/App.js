import React from "react";

import { Navbar, CTA, Brand } from "./components";
import {
  Footer,
  Blog,
  Header,
  Possibility,
  Whatgpt3,
  Features,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
