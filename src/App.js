import React from "react";
import Header from "./components/Header/Header";
import SectionBar from "./components/SectionBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

//Redux

function App() {
  return (
    <Router>
      <Header />
      <SectionBar />
      <div className="red container mt-2 mb-2">
        <div className="row">
          <div className="blue col-md-8 order-md-1 "></div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
