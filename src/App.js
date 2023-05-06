import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from './Components/About/About';

import Footer from './Components/Footer/Footer';

import Header from './Components/Header/Header';

import Homepage from './Components/Homepage/Homepage.jsx'

import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import GetLedger from './Components/Ledeger/GetLedger';
import DeleteLedger from './Components/Ledeger/DeleteLedger';
import UpdateLedger from './Components/Ledeger/UpdateLedger';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
         <Dashboard/>
         <GetLedger/>
         <DeleteLedger/>
         <UpdateLedger/>
         <Admin/>
        <Routes>
      
            
            <Route  path="/about"element={<About/>}></Route>
            <Route path="/homepage" element={<Homepage/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/" element={<Footer />}>
              
            </Route>
        </Routes>
        
    </Router>
    <Footer/>
</div>
  );
}

export default App;
