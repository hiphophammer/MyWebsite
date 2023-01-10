import { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Jeongwook Oh</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="">Introduction</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Button variant="primary">Primary</Button>
      </div>
    </div>
  );
}

export default App;
