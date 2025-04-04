import { Container, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container style={{ padding: '140px 0' }}>
      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-primary">Kontak Kami</h2>

        <div className="d-flex justify-content-center">
          <div style={{ padding: '0 0 0 300px' }}>
            <h5 className="text-primary my-3">PT. LESTARI MULYA RESIDENCE</h5>
            <div>Jl. Pemuda No. 138 Klaten</div>
            <div>Telp. 0272-327-929 Mobile 0811 257 792</div>
            <Button variant="primary" size="lg" className="my-4">
              Hubungi Kami
            </Button>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-[800px] mt-10">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.3410831583476!2d110.6064821764647!3d-7.640611992403913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a42c1a50e6f7d%3A0x5027a76e3566ea0!2sJl.%20Pemuda%20No.138%2C%20Klaten%2C%20Kota%20Klaten%2C%20Jawa%20Tengah%2057421!5e0!3m2!1sid!2sid!4v1712234567890!5m2!1sid!2sid"
            width="100%"
            height="500px"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Container>
  )
}

export default Contact
