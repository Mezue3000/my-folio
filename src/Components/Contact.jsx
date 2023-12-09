import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className='p-5'>
        <h1 className='about fw-bold'>Contact Us</h1>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className='text-light ms-3'>Name</Form.Label>
          <Form.Control type="text" className='w-75 control' placeholder='Mezue Obiora' />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label className='text-light ms-3'>Email Address</Form.Label>
          <Form.Control type="email" className='w-75 control' placeholder='Pylotworld@yahoo.com' multiple />
        </Form.Group>
        <Form.Group controlId="formFileDisabled" className="mb-3">
          <Form.Label className='text-light ms-3'>Phone-Number</Form.Label>
          <Form.Control type="number" className='w-75 control' placeholder='+234...' aria-required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='text-light ms-3'>Message</Form.Label>
          <Form.Control as="textarea" className='w-75' rows={3} placeholder='Write Message' />
        </Form.Group>
        <button className='btn btn-info' type='button'>Send Info</button>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46316648493!2d3.118801566010113!3d6.548369255271702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1696060299201!5m2!1sen!2sng" className='w-100 map' referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}
export default Contact