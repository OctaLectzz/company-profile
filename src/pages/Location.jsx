import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Location = () => {
  return (
    <Container style={{ padding: '140px 0' }}>
      {/* Location Section */}
      <section id="location">
        <h2 className="text-primary">Lokasi</h2>
        <p className="my-4">
          Sebagai salah satu developer perumahan yang berkomitmen memberikan rumah bagi seluruh lapisan masyarakat, Kotabaru Land telah mengembangkan rumah beserta fasilitas pelengkapnya di berbagai
          lokasi.
        </p>
      </section>

      {/* Detail Section */}
      <section id="location-detail">
        <Row className="my-5">
          {['Klaten', 'Solo', 'Karanganyar', 'Semarang', 'Boyolali', 'Palembang'].map((location, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 p-4">
                <Card.Img variant="top" src={`/img/location/${location}.jpg`} />
                <Card.Body>
                  <Card.Title className="my-4">{location}</Card.Title>
                  <p>{location}</p>
                  <Button variant="secondary" size="lg" className="text-primary">
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  )
}

export default Location
