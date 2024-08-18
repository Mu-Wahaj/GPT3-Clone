import "./App.css";
import {  Cta, Brand, Navbar } from "./Components";
import "./App.css";

import {
  WhatGPT3,
  Footer,
  Possibilitiy,
  Blog,
  Header,
  Features,
} from "./containers";
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilitiy />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
