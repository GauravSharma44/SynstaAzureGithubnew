import logo from './logo.svg';
import './App.css';
import "./components/Navbar/Navbar.css"
import NavbarComp from './components/Navbar/NavbarComp';
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 import 'bootstrap/dist/css/bootstrap.css'
 
import { Navbar } from 'react-bootstrap';
import NavbarTest from './components/NavbarTest/NavbarTest';
import GoogleFacebookLogin from './components/LogIn/GoogleFacebookLogin';
import Footer from './components/Footer/Footer';
import Accordion from 'react-bootstrap/Accordion'




function App() {
  return (
    <div >
      
          <NavbarComp/> 
          
          {/* <NavbarTest/>  */}
          {/* <GoogleFacebookLogin/> */}
          
          <Footer/>
    </div>
  );
}

export default App;
