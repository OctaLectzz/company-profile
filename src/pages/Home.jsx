import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-home" style={{ backgroundColor: '#0d1321', padding: '120px 0' }}>
        <Container className="text-light py-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h2>KOTA BARU LAND</h2>
              <p className="my-4">
                Sejak tahun 2008, Kotabaru Land telah berkomitmen untuk mengembangkan properti yang mampu menjawab kebutuhan dan keinginan konsumen di berbagai wilayah. Hingga hari ini, Kotabaru Land
                berhasil mengembangkan dua identitas perumahan yaitu Taman Anggrek dan Taman Melati dengan wilayah operasi meliputi Solo, Klaten, Karanganyar, Boyalali, Semarang, Kebumen,
                Banjarnegara, Pati, dan Sukoharjo.
              </p>
              <Link to="/about-us" className="text-secondary fw-bold" style={{ textDecoration: 'none' }}>
                More...
              </Link>
            </Col>
            <Col md={6}>
              <iframe width="100%" height="308px" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
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
              Kota Baru Land berkomitmen untuk selalu memberikan pelayanan secara profesional dengan mengedepankan produk berkualitas, dinamis, inovatif, dan legal. Kota Baru Land menyediakan berbagai
              cakupan produk-produk yang disesuaikan dengan kebutuhan pasar, serta menguasai pengetahuan mendalam mengenai pangsa pasar dan kemampuan menanggulangi masalah secara bijaksana.
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
          <Row>
            {[
              {
                img: 'amarta',
                title: 'Juiring',
                desc: 'Puri Amarta'
              },
              {
                img: 'ketandan',
                title: 'Ketandan',
                desc: 'Graha Mulya Ketandan'
              },
              {
                img: 'coming-soon',
                title: 'Coming Soon',
                desc: ''
              },
            ].map((location, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="h-100 p-4 location-card">
                  <Card.Img variant="top" src={`/img/location/${location.img}.jpeg`} className="location-img" />
                  <Card.Body>
                    <Card.Title className="my-4">{location.title}</Card.Title>
                    <p>{location.desc}</p>
                    <Button variant="secondary" size="lg" className="text-primary">
                      Lihat Detail
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
