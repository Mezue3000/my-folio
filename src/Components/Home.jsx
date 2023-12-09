import { Carousel, ProgressBar } from 'react-bootstrap';
import 'animate.css';
import image1 from '../assets/Medias/img1.jpg';
import image2 from '../assets/Medias/img2.webp';
import image3 from '../assets/Medias/success.jpg';

const Home = () => {
  return (
    <section id='home' className='homy pb-5'>
      <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 imagey"
              src= {image1}
              alt="First slide"
            />
              
            <Carousel.Caption>
              <p className='para1 text-white fw-bolder animate__animated animate__backInDown'>Mezue Obiora Is   A Fullstack Software Developer.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 imagey"
              src={image2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p className='para1 text-primary fw-bolder animate__animated animate__backInDown'>Mezue Obiora Is A Fullstack Software Developer.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 imagey"
              src={image3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p className='para1 text-dark fw-bolder animate__animated animate__backInDown'>
                Mezue Obiora Is A Fullstack Software Developer.
              </p>
            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>

        <div>
          <h3 className='fs-2 ms-5 fw-bold text-info mt-1'>Cloud Computing</h3>
          <ProgressBar className='w-75 ms-5' animated now={55} />;
          <h3 className='fs-2 ms-5 fw-bold text-white'>React-Redux</h3>
          <ProgressBar className='w-75 ms-5 mb-2' animated now={75} />
        </div>
    </section>
  )
}
export default Home