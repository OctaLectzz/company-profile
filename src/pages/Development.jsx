import { Container, Row, Col } from 'react-bootstrap'

const Development = () => {
  return (
    <Container style={{ padding: '140px 0' }}>
      {/* Development Section */}
      <section id="development">
        <h2 className="text-primary">Development</h2>
        <p className="my-4">
          Kotabaru Land mengembangkan berbagai proyek properti yang tersebar di berbagai wilayah. Pengembangan proyek dilakukan untuk menjawab kebutuhan dan keinginan pasar dengan komitmen tinggi,
          produk berkualitas, inovatif serta memiliki jaminan legal. Mengusung konsep Modern Minimalis yang berwawasan lingkungan, Kotabaru Land menyediakan beragam pilihan hunian yang membantu
          meningkatkan kualitas hidup seluruh penghuninya.
        </p>
        <p className="my-4">
          Pengembangan proyek properti dilakukan dengan dua nama proyek yaitu <b>Taman Anggrek</b> dan <b>Taman Melati</b>. Kedua proyek perumahan ini dikembangkan dengan spesifikasi yang berbeda-beda
          sesuai dengan kebutuhan masyarakat untuk mendapatkan rumah secara bijaksana.
        </p>
      </section>

      {/* Detail Section */}
      <section id="development-detail">
        <Row className="my-5">
          <Col md={6} className="p-3">
            <img src="/img/taman-anggrek.jpg" className="img-fluid rounded-4 my-2" alt="Taman Anggrek" style={{ boxShadow: '2px 3px 14px #000' }} />
            <div className="text-primary text-center fw-bold fs-5">Taman Anggrek</div>
          </Col>
          <Col md={6} className="p-3">
            <img src="/img/taman-melati.jpg" className="img-fluid rounded-4 my-2" alt="Taman Melati" style={{ boxShadow: '2px 3px 14px #000' }} />
            <div className="text-primary text-center fw-bold fs-5">Taman Melati</div>
          </Col>
        </Row>
      </section>

      {/* Project Section */}
      <section id="project">
        <h2 className="text-primary">Our Passed Project</h2>
        <p className="text-grey text-center" style={{ padding: '140px 0' }}>
          Coming Soon
        </p>
      </section>
    </Container>
  )
}

export default Development
