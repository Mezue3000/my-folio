import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import workF from '../assets/Medias/workF.jpg'
import work4 from '../assets/Medias/work4.webp'
import workA from '../assets/Medias/workA.jpg'

const Blog = () => {
  return (
    <section id='blog' className='blog-section pb-5'>
        <Container>
            <div>
                <h1 className='about pt-5 fw-bold'>Latest From Blog</h1>
                <p className='about2'>Lorem ipsum dolor sit amet.</p>
            </div>
            <Row xs={1} sm={2} md={3} className='pt-3' >
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={workF} />
                        <Card.Body>
                            <Card.Title>Valentine Gift</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read My Post</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={work4} />
                        <Card.Body>
                            <Card.Title>Global Office</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read My Post</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={workA} />
                        <Card.Body>
                            <Card.Title>Visa Lounge</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Read My Post</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog