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
            <div>Dusun II, Bulurejo, Kec. Juwiring, Kabupaten Klaten, Jawa Tengah 57472</div>
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d988.560100693524!2d110.7264174!3d-7.657281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3fd22b026d4d%3A0x1ee491515ac6d345!2sKantor%20Pemasaran%20Puri%20Amarta%20Juwiring!5e0!3m2!1sid!2sid!4v1743757150039!5m2!1sid!2sid"
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
