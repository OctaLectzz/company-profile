import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const NavbarComponent = () => {
  const location = useLocation()

  return (
    <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/img/lestari mulya2.png" alt="logo" width={120} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {[
              { to: '/', label: 'Home' },
              { to: '/about-us', label: 'Tentang Kami' },
              { to: '/development', label: 'Development' },
              { to: '/location', label: 'Lokasi' },
              { to: '/contact', label: 'Kontak' }
            ].map((item, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={item.to}
                className={`fw-bold mx-2 ${location.pathname === item.to ? 'text-secondary' : 'text-light'}`}
                style={{
                  transition: 'color 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => (e.target.style.color = '#d5ffa5')}
                onMouseLeave={(e) => (e.target.style.color = location.pathname === item.to ? '#d5ffa5' : '#ffffff')}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
