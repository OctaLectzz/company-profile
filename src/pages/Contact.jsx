import { Container, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container style={{ padding: '140px 0' }}>
      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-primary">Kontak Kami</h2>

        <div className="d-flex justify-content-center">
          <div style={{ padding: '0 0 0 300px' }}>
            <h5 className="text-primary my-3">Kota Baru Land Office</h5>
            <div>Jl. Pemuda No. 138 Klaten</div>
            <div>Telp. 0272-327-929 Mobile 0811 257 792</div>
            <Button variant="primary" size="lg" className="my-4">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Contact
