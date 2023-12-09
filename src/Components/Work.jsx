import React from 'react'
import 'animate.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import work2 from '../assets/Medias/work 2.webp';
import work3 from '../assets/Medias/work3.webp';
import work4 from '../assets/Medias/work4.webp';
import workA from '../assets/Medias/workA.jpg';
import workD from '../assets/Medias/workD.jpg';
import workF from '../assets/Medias/workF.jpg';
import workX from '../assets/Medias/workX.jpg';
import swim from '../assets/Medias/swim.webp';
import Sports from '../assets/Medias/Sports.jpg';

const Work = () => {
  return (
    <section id='work' className='work-section pb-5'>
      <Container>
        <div>
          <h1 className='about pt-5 fw-bold'>Our Work</h1>
          <p className='about2'>Lorem ipsum dolor sit amet.</p>
        </div>
        <Row xs={1} sm={2} md={3} className='g-3 pt-3 animate1 '>
          <Col><img className='work-image animate__animated animate__zoomIn'src={work2} alt="images" /></Col>
          <Col><img className='work-image animate__animated animate__zoomIn'src={swim}  alt="images" /></Col>
          <Col><img className='work-image animate__animated animate__zoomIn'src={work4} alt="images" /></Col>
          <Col><img className='work-image animate__animated animate__zoomIn'src={workA} alt="images" /></Col>
          <Col><img className='work-image animate__animated animate__zoomIn'src={workD} alt="images" /></Col>
          <Col><img className='work-image animate__animated animate__zoomIn'src={workF} alt="images" /></Col>
          <Col><img className='work-image animate__animated animate__zoomIn'src={workX} alt="images" /></Col>
          <Col><img className='work-image animate__animated animate__zoomIn'src={work3} alt="images" /></Col>
          <Col><img className='work-image animate__animated animate__zoomIn'src={Sports}alt="images" /></Col>
        </Row>        
      </Container>
    </section>
  )
}
export default Work