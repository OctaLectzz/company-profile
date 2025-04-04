import { Container } from 'react-bootstrap'
import LocationData from '/src/components/Location'

const Location = () => {
  return (
    <Container style={{ padding: '140px 0' }}>
      {/* Location Section */}
      <section id="location">
        <h2 className="text-primary">Lokasi</h2>
        <p className="my-4">
          Sebagai salah satu developer perumahan yang berkomitmen memberikan rumah bagi seluruh lapisan masyarakat, PT. LESTARI MULYA RESIDENCE telah mengembangkan rumah beserta fasilitas pelengkapnya
          di berbagai lokasi.
        </p>
      </section>

      {/* Detail Section */}
      <section id="location-detail">
        <LocationData />
      </section>
    </Container>
  )
}

export default Location
