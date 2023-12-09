import Container from 'react-bootstrap/Container';
import { BsFacebook, BsFillCartPlusFill, BsFillCursorFill, BsChatDotsFill, BsGoogle  } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
       <Container>
            <div className='iconf'>
            <a className='text-dark' href="http//:www.facebook.com"><BsFacebook /></a>
            <a className='text-dark' href=""><BsFillCartPlusFill /></a>
            <a className='text-dark' href=""><BsFillCursorFill /></a>
            <a className='text-dark' href="http//:www.yahoomail.com"><BsChatDotsFill /></a>
            <a className='text-dark' href="http//:www.google.com"><BsGoogle /></a>
            </div>

            <div className='copy'>
              <h4>&copy; 2023 Portfolio Dashboard Built By Mezue Obiora</h4>
            </div>
        </Container>
    </footer>
  )
}
export default Footer