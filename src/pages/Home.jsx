import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Location from '/src/components/Location'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-home" style={{ backgroundColor: '#0d1321', padding: '120px 0' }}>
        <Container className="text-light py-5">
          <div className="float-end">
            <img src="/img/lestari mulya2.png" alt="logo" width={500} className="p-4" />
          </div>

          <Row className="flex items-center justify-content-between">
            <Col md={10}>
              <h2>PT. LESTARI MULYA RESIDENCE</h2>
              <p className="my-4">
                Sejak tahun 2008, PT. LESTARI MULYA RESIDENCE telah berkomitmen untuk mengembangkan properti yang mampu menjawab kebutuhan dan keinginan konsumen di berbagai wilayah. Hingga hari ini,
                PT. LESTARI MULYA RESIDENCE berhasil mengembangkan beberapa perumahan seperti Puri Amarta dan Graha Mulya Ketandan dengan wilayah yang meliputi Boyolali, Karanganyar,
                Sukoharjo, dan Klaten.
              </p>
              <Link to="/about-us" className="text-secondary fw-bold" style={{ textDecoration: 'none' }}>
                More...
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Development Section */}
      <section id="development-home" style={{ backgroundColor: '#E6E6E6', padding: '120px 0 0 0' }}>
        <Container className="py-5">
          <h1 className="text-primary text-center mb-4">DEVELOPMENT</h1>
          <div className="d-flex justify-content-center">
            <p className="text-center" style={{ maxWidth: '500px', color: '#817A88' }}>
              PT. LESTARI MULYA RESIDENCE berkomitmen untuk selalu memberikan pelayanan secara profesional dengan mengedepankan produk berkualitas, dinamis, inovatif, dan legal. PT. LESTARI MULYA
              RESIDENCE menyediakan berbagai cakupan produk-produk yang disesuaikan dengan kebutuhan pasar, serta menguasai pengetahuan mendalam mengenai pangsa pasar dan kemampuan menanggulangi
              masalah secara bijaksana.
            </p>
          </div>
          <Row className="my-4">
            <Col md={6} className="p-3">
              <img src="/img/Amarta.jpeg" className="img-fluid rounded-4 my-2" alt="Taman Anggrek" style={{ boxShadow: '2px 3px 14px #000' }} />
              <div className="text-white text-center fw-bold fs-5">Puri Amarta</div>
            </Col>
            <Col md={6} className="p-3">
              <img src="/img/Ketandan.jpeg" className="img-fluid rounded-4 my-2" alt="Taman Melati" style={{ boxShadow: '2px 3px 14px #000' }} />
              <div className="text-white text-center fw-bold fs-5">Graha Mulya Ketandan</div>
            </Col>
          </Row>
        </Container>
        <div style={{ backgroundColor: '#0d1321', padding: '80px 0', marginTop: '-210px', zIndex: '99' }} />
      </section>

      {/* Location Section */}
      <section id="location-home">
        <Container className="py-5 bg-light">
          <h2 className="text-primary mb-4 fs-1">Lokasi</h2>
          <Location />
        </Container>
      </section>
    </>
  )
}

export default Home
