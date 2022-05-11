// import logo from './logo.svg';
import './App.css';
//imort bootstra in main Alication.js file
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./compos/header/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { f179} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Carrousel from "./compos/carousel/Carousel";


function App() {
  return (
    <div className="App">
    <Header/> 
    <Carrousel/>
      
    </div>
  );
}

export default App;
