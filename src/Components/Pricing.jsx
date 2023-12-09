import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Pricing = () => {
  return (
    <section id='pricing' className='pricing pb-5'>
        <Container>
            <div>
                <h1 className='about fw-bold pt-5'>Pricing $ Plans</h1>
                <p className='about2'>Lorem ipsum dolor sit amet.</p>
            </div>
            <Row xs={1} sm={2} md={3} className='pt-3'>
                <Col>
                    <div className='bg-info text-light rounded-pill'>
                        <h3 className='text-center pt-2'>pricing</h3>
                        <p className='text-center'>$375</p>
                        <ListGroup className='text-center fw-bold'>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>             
                    </div>    
                </Col>

                <Col>
                    <div className='bg-dark text-light rounded-pill'>
                        <h3 className='text-center pt-2'>pricing</h3>
                        <p className='text-center'>$540</p>
                        <ListGroup className='text-center fw-bold'>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>             
                    </div> 
                </Col>

                <Col>
                    <div className='bg-danger text-light rounded-pill'>
                        <h3 className='text-center pt-2'>pricing</h3>
                        <p className='text-center'>$200</p>
                        <ListGroup className='text-center fw-bold'>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>             
                    </div>                    
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Pricing