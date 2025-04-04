import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import locationData from '/src/data/location.json'
import Location from '/src/components/Location'

const Show = () => {
  const { slug } = useParams()
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const data = locationData.find((item) => item.slug === slug)
    setLocation(data)
  }, [slug])

  if (!location) {
    return <p>Loading...</p>
  }

  return (
    <>
      <section style={{ padding: '120px 0 0 0' }}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={7} className="px-4">
              <h3 className="fw-bolder">{location.name}</h3>
              <p className="my-2 mx-4 fs-5">{location.description}</p>
            </Col>
            <Col md={5} className="px-4">
              <img src={location.image} className="img-fluid my-2" alt={location.name} />
            </Col>
          </Row>

          <Row className="align-items-center my-5">
            {location.denah.map((denah, index) => (
              <Col md={4} className="px-4" key={index}>
                <img src={denah} className="img-fluid my-2" alt={`Denah ${index + 1}`} />
              </Col>
            ))}
            <Col md={4} className="px-4">
              <h3 className="fw-bolder">SPEC BANGUNAN</h3>
              <ul className="fs-5">
                {location.spec.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Location Section */}
      <section id="location-home">
        <Container className="py-5 bg-light">
          <h2 className="text-primary mb-4 fs-1">Lokasi lainnya</h2>
          <Location />
        </Container>
      </section>
    </>
  )
}

export default Show
