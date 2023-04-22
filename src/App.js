import { useState } from "react";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { items } from "./components/data";
import "./App.css";
// import Answer from "./components/Answer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";

function App() {
  
  

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/answer"
              element={
                [
            
                ]
              }
            />
            <Route
              path="/"
              element={[
                <Navbar title=" Assignment" />,
                <div className="container">
                  {/* <List mode={mode} /> */}
                  <List items={items} />
                </div>,
              ]}
            />
          </Routes>
        </div>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
