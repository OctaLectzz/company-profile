import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <Container style={{ padding: '140px 0' }}>
      {/* About Us Section */}
      <section id="about-us">
        <h2 className="text-primary">Tentang Kami</h2>
        <p className="my-4">
          Kotabaru Land didirikan di Klaten pada tahun 2008 dengan nama PT. Indah Pratama Grida. Sejak awal berdirinya, Kotabaru Land telah memutuskan untuk bergerak di bidang properti dengan cakupan
          bisnis yang meliouti perumahan, ruko, atau properti komersial strategis lainnya.
        </p>
        <p className="my-4">
          Hingga hari ini, Kotabaru Land telah berhasil mengembangkan puluhan proyek properti komersil di berbagai wilayah. Mengusung nama Taman Anggrek dan Taman Melati sebagai identitas perumahan
          pada tahap pengembangan awal, Kotabaru Land telah berhasil memperluas wilayah operasinya di wilayah Solo, Klaten, Boyalali, Karanganyar, Semarang, Kebumen, Banjarnegara, Pati, dan Sukoharjo,
          dan kota kota lainnya.
        </p>
      </section>

      {/* Visi Misi Section */}
      <section id="visi-misi">
        <Row>
          <Col md={6} className="p-5">
            <h5 className="text-primary text-center">Visi</h5>
            <p>Menjadi perusahaan properti dan konstruksi yang mampu membangun kepercayaan pasar melalui integrasi antara permintaan pasar dan kualitas produk.</p>
          </Col>
          <Col md={6} className="p-5">
            <h5 className="text-primary text-center">Misi</h5>
            <p>
              Menjadi pengembang properti yang menjamin kualitas, legalitas, akurasi waktu, dan efektifitas alokasi biaya untuk memaksimalkan kepuasan konsumen dan pemangku kepentingan secara luas.
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
            <h6 className="text-primary text-center my-3">Komitmen Tinggi</h6>
            <p>Kotabaru Land berkomitmen untuk bekerja sepenuh hati dalam upaya mencapai hasil terbaik dan bertanggung jawab terhadap kepentingan konsumen serta pemangku kepentingan.</p>
          </Col>
          <Col md={3} className="p-3">
            <div className="d-flex justify-content-center my-3">
              <img src="/img/service/Produk Berkualitas.png" width={80} />
            </div>
            <h6 className="text-primary text-center my-3">Produk Berkualitas</h6>
            <p>Menciptakan produk berkualitas tinggi yang sesuai dengan kebutuhan dan harapan dari seluruh konsumen.</p>
          </Col>
          <Col md={3} className="p-3">
            <div className="d-flex justify-content-center my-3">
              <img src="/img/service/Inovatif.png" width={80} />
            </div>
            <h6 className="text-primary text-center my-3">Inovatif</h6>
            <p>Mengembangkan inovasi-inovasi mutakhir yang mampu memaksimalkan keseluruhan proses bisnis yang tengah berjalan. </p>
          </Col>
          <Col md={3} className="p-3">
            <div className="d-flex justify-content-center my-3">
              <img src="/img/service/Legal.png" width={80} />
            </div>
            <h6 className="text-primary text-center my-3">Legal</h6>
            <p>Menjamin keamanan transaksi properti antara perusahaan dan konsumen melalui bentuk dan jaminan legalitas yang taat pada Undang Undang Republik Indonesia.</p>
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default About
