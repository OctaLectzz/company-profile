import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <Container style={{ padding: '140px 0' }}>
      {/* About Us Section */}
      <section id="about-us">
        <h2 className="text-primary">Tentang Kami</h2>
        <p className="my-4">
          PT. Lestari Mulya Residence sebelum berdiri secara badan hukum telah memiliki berbagai pengalaman di bidang properti di Area Solo Raya. Bidang properti yang kami jalankan berupa pembangunan
          perumahan dan kavling siap bangun. Kami sudah mendirikan beberapa perumahan di Kabupaten Boyolali, Karanganyar, Sukoharjo, dan Klaten.
        </p>
        <p className="my-4">
          Setelah melewati perjalanan panjang usaha kami, dan untuk mengejar Visi dan Misi kami, maka pada bulan Desember 2020 kami membuat badan usaha Perseroan Terbatas/PT. Badan usaha ini
          diharapkan akan membuat usaha kami semakin kompeten dan diakui dalam bidang properti di skala nasional.
        </p>
      </section>

      {/* Visi Misi Section */}
      <section id="visi-misi">
        <Row>
          <Col md={6} className="p-5">
            <h5 className="text-primary text-center">Visi</h5>
            <p>Menjadi Perusahaan Properti dengan memberikan Produk dan Pelayanan Terbaik.</p>
          </Col>
          <Col md={6} className="p-5">
            <h5 className="text-primary text-center">Misi</h5>
            <p>
              <ul>
                <li>Membantu Masyarakat mendapatkan Rumah Idaman,</li>
                <li>Memaksimalkan Potensi Setiap Daerah Properti yang Dikembangkan,</li>
                <li>Menjalin hubungan kerja sama dengan mitra usaha yang saling menguntungkan dan berkelanjutan.</li>
              </ul>
            </p>
          </Col>
        </Row>
      </section>

      {/* Service Section */}
      <section id="service">
        <Row>
          <Col md={3} className="p-3">
            <div className="d-flex justify-content-center my-3">
              <img src="/img/service/Komitmen Tinggi.png" width={80} />
            </div>
            <h6 className="text-primary text-center my-3">Profesionalisme</h6>
            <p>
              PT. Lestari Mulya Residence berkomitmen untuk menjalankan bisnis properti dengan profesionalisme tinggi, memberikan pelayanan terbaik, serta menjaga kepercayaan konsumen dan mitra usaha.
            </p>
          </Col>
          <Col md={3} className="p-3">
            <div className="d-flex justify-content-center my-3">
              <img src="/img/service/Produk Berkualitas.png" width={80} />
            </div>
            <h6 className="text-primary text-center my-3"> Pembangunan Berkelanjutan</h6>
            <p>Berfokus pada pengembangan properti yang tidak hanya memberikan manfaat bagi masyarakat, tetapi juga memaksimalkan potensi daerah yang dikembangkan secara berkelanjutan.</p>
          </Col>
          <Col md={3} className="p-3">
            <div className="d-flex justify-content-center my-3">
              <img src="/img/service/Inovatif.png" width={80} />
            </div>
            <h6 className="text-primary text-center my-3">Kemitraan Strategis</h6>
            <p>Menjalin hubungan kerja sama yang saling menguntungkan dengan mitra usaha, serta menciptakan jaringan bisnis properti yang solid dan kompetitif di tingkat nasional.</p>
          </Col>
          <Col md={3} className="p-3">
            <div className="d-flex justify-content-center my-3">
              <img src="/img/service/Legal.png" width={80} />
            </div>
            <h6 className="text-primary text-center my-3">Keabsahan Hukum</h6>
            <p>Menjamin keamanan dan transparansi dalam setiap transaksi properti melalui legalitas yang telah diakui dan sesuai dengan regulasi yang berlaku di Indonesia</p>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default About
