import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFillPieChartFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-warning py-3 fixed-top heady">
            <Container>
                <div>
                  <BsFillPieChartFill className='pb-1 iconz'/>
                  <Navbar.Brand href="#home" className='fw-bolder fs-5'>Pylot's Folio</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="heady fw-bolder fs-5 ms-auto">
                        <Nav.Link href="#home" data-tooltip-id='my-tooltip' data-tooltip-content="home">Home</Nav.Link>
                        <Nav.Link href="#about" data-tooltip-id='my-tooltip' data-tooltip-content='about'>About</Nav.Link>
                        <Nav.Link href="#work" data-tooltip-id='my-tooltip' data-tooltip-content='work'>Works</Nav.Link>
                        <Nav.Link href="#pricing" data-tooltip-id='my-tooltip' data-tooltip-content='pricing'>Pricing</Nav.Link>
                        <Nav.Link href="#blog" data-tooltip-id='my-tooltip' data-tooltip-content='blog'>Blog</Nav.Link>
                        <Nav.Link href="#testimonial" data-tooltip-id='my-tooltip' data-tooltip-content='testimonial'>Testimonial</Nav.Link> 
                        <Nav.Link href="#contact" data-tooltip-id='my-tooltip' data-tooltip-content='contact'>Contact</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);
}
export default Header