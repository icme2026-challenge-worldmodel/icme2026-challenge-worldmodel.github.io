import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Evaluation from './pages/Evaluation';
import Data from './pages/Data';
import Schedule from './pages/Schedule';
import Submission from './pages/Submission';
import Organizers from './pages/Organizers';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">ICME 2026 Challenge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/evaluation">Evaluation</Nav.Link>
                <Nav.Link as={Link} to="/data">Data</Nav.Link>
                <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
                <Nav.Link as={Link} to="/submission">Submission</Nav.Link>
                <Nav.Link as={Link} to="/organizers">Organizers</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="flex-grow-1 mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/data" element={<Data />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/organizers" element={<Organizers />} />
          </Routes>
        </Container>

        <footer className="bg-light py-3 mt-auto text-center">
          <Container>
            <p className="mb-0">&copy; 2026 Physics-Grounded Stress Testing of World Models Challenge. All Rights Reserved.</p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;