import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'animate.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import globalUrl from  '../CalculaterApiUrls/urls'

const Request_a_Callback = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [FullName, setFullName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');
  const handleCloseMsg = () => setShowMsg(false);

  const handleForm = (e) => {
    e.preventDefault()
    if (FullName != '' || MobileNumber != '' || Email != '' || Subject != '') {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[6789]\d{9}$/;
      const PhoneValid = mobPattern.test(MobileNumber);
      if  (PhoneValid == false) {
        toast.error("Please Enter Valid Mobile Number!");
      }else{
      const data =
      {
        FullName,
        MobileNumber,
        Email,
        Subject,
        Message
      }

      axios.post(globalUrl.commonUrl+'contact-us', data).then((res) => {
        console.log("asaad", res);

        // toast.success("Registeration Succesfully!");
        setFullName('');
        setMobileNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
        setShowMsg(true);

      }).catch((err) => {
        if(err){
          // console.log("err msg ", err.response.data.msg);
          toast.error("Email AllReady Registerd");
          // console.log("err from message ", err)
        }
      })

    } 
  }else {
      toast.error("All Filled Required!");
    }


  }
  
return (
<>
<section className="pt-20 pb-20">
  <div className="container">
    <div className="">
    <div className="row justify-content-center ">
      <div className="col-md-10 callback-form">
        <div className="row">
          <div className="col-md-7">
          <div className="contact-form-header">
            <h2 className="pt-3">Request Call Back</h2>
            <div className="contact-Border text-center"></div>
          </div>
          <div className="contact-form-content">
          <Form onSubmit={handleForm}>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={FullName} onChange={(e) => setFullName(e.target.value)} required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="number" value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} minLength='10' maxLength='10' required/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" value={Subject} onChange={(e) => setSubject(e.target.value)} required/>
            </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} value={Message}  onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>
            <Button className="btn3 mt-2" type='submit' variant="outline-primary"> Submit</Button>
          </Form>
          </div>
        </div>
      <div className="col-md-5 justify-content-center d-flex align-items-stretch callback-bg" id="desktop">
      <div className="align-self-center">
      <div className="callback-logo textcenter">
      <img src="../assets/img/logo.webp" className="img-fluid" />
      </div>
      <div className="callback-content text-light">
      <h3>Need help on your financial Query ?</h3>
      <p>Share your details.<br /> 
      We will call you back within 24 hrs.</p>
      <span>( Mon. to Sat. 10 AM to 6 PM )</span>      
      </div>
      </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
</section>

<section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <Modal centered show={showMsg} onHide={handleCloseMsg}>
                <Modal.Body>
                  <h2>ALL SET!</h2>
                  <p>Now just sit tight. You’ll hear from us soon.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="btn3" variant="outline-primary" onClick={handleCloseMsg}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </section>
</>
)
}
export default Request_a_Callback;