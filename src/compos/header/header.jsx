import "./header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import AppleIcon from '@mui/icons-material/Apple';

const Header = () =>{
return (
    
    <Navbar bg="light" expand="xl">
    <Container>
    
    <Navbar.Brand href="#home" id="navbar-brand"> <AppleIcon sx={{fontSize:80}} id="navbar-brand-icon"/> </Navbar.Brand>
    
    <Navbar.Toggle />
    {/* //Special tag for rest of the navbar elements <Nav > */}

    <Navbar.Collapse>
    
    <Nav id="" class="toBeColapsed">
    
        <Nav.Link id="nav-link">Legacy</Nav.Link>
        <Nav.Link id="nav-link">Prices</Nav.Link>
        <Nav.Link id="nav-link">Products</Nav.Link>
        <NavDropdown id="nav-link" title={<AppleIcon/>}>
            <NavDropdown.Item>I-Phone</NavDropdown.Item>
            <NavDropdown.Item>I-Pad</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Mac Book Pro</NavDropdown.Item>
        </NavDropdown>
    
    </Nav>
    
    </Navbar.Collapse>
    
    
    </Container>
    </Navbar>

    
)
}

export default Header;