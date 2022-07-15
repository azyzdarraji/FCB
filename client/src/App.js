// import './App.css';

import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Dashboard from "./components/Pages/Dashboard";

function App() {
    return (
        <div>
            <BrowserRouter>
                {/* <Header/>
      <Navbar2/>
       <Navbar/> 
      <Main/>
      <Footer/>
     */}
                <Dashboard />
            </BrowserRouter>
        </div>
    );
}

export default App;
