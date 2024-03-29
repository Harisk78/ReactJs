import "./App.css";
import React from "react";
import Header from "./components/Header/Header.js";
import Content from "./components/Content/Content.js";
import Footer from "./components/Footer/Footer.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
