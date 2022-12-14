import React from "react";
import Botoom from "./components/Botoom/Botoom";
import Center from "./components/Center/Center";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Center/>
      <Botoom/>
      <Footer/>
    </div>
  );
}

export default App;
