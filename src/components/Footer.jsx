import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
  return (
    <footer className="text-light" style={{ backgroundColor: '#0d1321', padding: '80px 0' }}>
      <Container>
        <img src="/img/lestari mulya2.png" alt="logo" width={130} className="my-4" />
        <Row>
          <Col md={6}>
            <h5>PT LESTARI MULYA RESIDENCE</h5>
            <div>Jl. Pemuda No. 138 Klaten</div>
            <div>Telp. 0272-327 929 Mobile 0811 257 792</div>
          </Col>
          <Col md={2}>
            <h5 className="text-secondary fw-bold my-3">Explore</h5>
            <ul className="list-unstyled">
              <li className="my-2">
                <Link to="/" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link to="/about-us" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Tentang Kami
                </Link>
              </li>
              <li className="my-2">
                <Link to="/development" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Development
                </Link>
              </li>
              <li className="my-2">
                <Link to="/location" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Lokasi
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="text-secondary fw-bold my-3">Career</h5>
            <ul className="list-unstyled">
              <li className="my-2">
                <Link to="/contact" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Kontak
                </Link>
              </li>
              <li className="my-2">
                <Link to="/" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Events
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="text-secondary fw-bold my-3">Media</h5>
            <ul className="list-unstyled">
              <li className="my-2">
                <a href="#" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Instagram
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Facebook
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  Youtube
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="text-light fw-bold" style={{ textDecoration: 'none' }}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponent
