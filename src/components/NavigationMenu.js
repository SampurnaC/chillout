import { Container, Row, Col, Navbar } from 'react-bootstrap';

const NavigationMenu = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );
}
 
export default NavigationMenu;