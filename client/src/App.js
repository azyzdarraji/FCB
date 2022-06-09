// import './App.css';

import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";

function App() {
  return (
    <div>

      <BrowserRouter>
      <Header/>
      <Navbar2/>
      {/* <Navbar/> */}
      <Main/>
      <Footer/>
    
      </BrowserRouter>
      
       
      </div>
  );
}

export default App;
