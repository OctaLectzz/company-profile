import { Button, Card, Row, Col } from 'react-bootstrap'
import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import locationData from '/src/data/location.json'

const Location = () => {
  const location = useLocation()
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Row>
      {locationData
        .filter((location) => location.slug !== slug)
        .map((location, index) => (
          <Col as={Link} to={`/${location.slug}`} md={4} className="mb-4" key={index}>
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
  )
}

export default Location
