import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaMobile, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Axios from 'axios';
import dateFormat from 'dateformat';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import globalUrl from  '../CalculaterApiUrls/urls'


function Footer() {

  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [FullName, setFullName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleCloseMsg = () => setShowMsg(false);
  const handleShow = () => setShow(true);

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    Axios.get('https://bfccapital.com/blog/wp-json/wp/v2/posts?per_page=2').then(res => {
      // console.log("hello", res.data)
      setBlogs(res.data)
    })

  }, [])

  const handleForm = (e) => {

    e.preventDefault()
    if (FullName != '' || MobileNumber != '' || Email != '' || Subject != '') {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[6789]\d{9}$/;
      const PhoneValid = mobPattern.test(MobileNumber);
      if (PhoneValid == false) {
        toast.error("Please Enter Valid Mobile Number!");
      } else {
        const data =
        {
          FullName,
          MobileNumber,
          Email,
          Subject,
          Message
        }
        // console.log("data", data);
        axios.post(globalUrl.commonUrl+'contact-us', data).then((res) => {
          // console.log("asaad", res);

          // toast.success("Registeration Succesfully!");
          setFullName('');
          setMobileNumber('');
          setEmail('');
          setSubject('');
          setMessage('');
          setShowMsg(true);
          setShow(false)
        }).catch((err) => {
          if (err) {
            // console.log("err msg ", err.response.data.msg);
            toast.error("Something is Else");
            // console.log("err from message ", err)
          }
        })

      }
    } else {
      toast.error("All Filled Required!");
    }


  }

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
    
return (
<>
<section className="call-back">
<ul className="ul-right">
  <li>
    <a href="javascript:void(0)" onClick={handleShow}> <img src="../assets/img/callback.webp" className="mx-w img-fluid"/> <span className="over-text1"> Request a Call back </span> </a>
  </li>
</ul>

       <Modal  centered show={show} onHide={handleClose}>
        <Modal.Body>
        <Form onSubmit={handleForm}>
            <Row className="mb-3">
            <Form.Group  controlId="formGridEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={FullName} onChange={(e) => setFullName(e.target.value)} required/>
            </Form.Group>
            <Form.Group  controlId="formGridPassword">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="number" value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} minLength='10' maxLength='10' required/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group  controlId="formGridEmail">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group  controlId="formGridEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" value={Subject} onChange={(e) => setSubject(e.target.value)} required/>
            </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} value={Message}  onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>
            <Modal.Footer>
            <Button className="btn3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn3" type='submit' variant="primary" >
            Submit          
            </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
       </Modal>
</section>
<div className="container-fluid mt-lg-5 footer-shadow bg-footer">
  <footer className=" text-lg-start text-footer"
    >
    <section className="bg-footer">
      <div className="container text-md-start mt-lg-5">
        <div className="row mt-3">
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-lg-4">
           <div className="footer-logo d-flex">
            <div className="img-logo"> <img src="../assets/img/logo.webp" alt='logo' className="img-fluid"/></div>
            <div className="text-logo"> <img src="../assets/img/logo/bfc-capital-text.webp" alt='logo' className="img-fluid" /></div>
           </div>
            <p  className="pt-4">
            The largest distributor of mutual funds in the region, BFC Capital is on track to become one of the biggest in the nation. The company currently manages an AUM of over Rs. 7 billion and has a retail clientele of over 12,000 investors from 80 locations across India and the world.
            </p>
            <div className="footer-social-icon">
              <ul className="footer-social pt-2">
                <li className="social-icon"><a href="https://www.facebook.com/bfccapital/" target="_blank"><img src="../assets/img/facebook.webp" className="img-fluid"/></a></li>
                <li className="social-icon"><a href=" https://www.linkedin.com/company/bfccapitalpvtltd" target="_blank"><img src="../assets/img/linkedin.webp" className="img-fluid"/></a></li>
                <li className="social-icon"><a href="https://instagram.com/bfccapitalpvtltd?igshid=Yzg5MTU1MDY=" target="_blank"><img src="../assets/img/instagram.webp" className="img-fluid"/></a></li>
                <li className="social-icon"><a href="https://twitter.com/BFCCapital?t=uEm_AvwxJ-ZYgOHCBOQUJg&s=09" target="_blank"><img src="../assets/img/twitter.webp" className="img-fluid"/></a></li>
                <li className="social-icon"><a href="https://youtube.com/@bfccapitalpvt.ltd.3149" target="_blank"><img src="../assets/img/youtube.webp" className="img-fluid"/></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-lg-4 pt-2">
            
            <h4 className="text-uppercase heading">QUICK LINKS</h4>
            <hr
            className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
            <p>
              <Link to="/best-mutual-funds-to-invest-in-2023" onClick={scrollTop} className="text-footer foot-link">Best Mutual Funds to Invest in 2023</Link>
            </p>
            <p>
              <Link to="/best-elss-funds" onClick={scrollTop} className="text-footer foot-link">Best ELSS Funds</Link>
            </p>
            <p>
              <Link to="/best-sip-plans-to-invest" onClick={scrollTop} className="text-footer foot-link">Best SIP Plans to Invest</Link>
            </p>
            <p>
              <Link to="/tax-saving-mutual-fund" onClick={scrollTop} className="text-footer foot-link">Best Tax Saving Mutual Funds</Link>
            </p>
            <p>
              <Link to="/best-mutual-fund-for-lumpsum-investment" onClick={scrollTop} className="text-footer foot-link">Best Mutual Fund for Lumpsum Investment</Link>
            </p>
            
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-lg-4 pt-2">
            <h4 className="text-uppercase heading">Company Info</h4>
            <hr
            className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
            <p><span className="Address"><FaMapMarkerAlt /> </span>
            <a href="https://goo.gl/maps/Ut3yYcCFsM6fKzTA6" target="_blank"  className="text-footer foot-link">BFC Capital Pvt Ltd <br /> CP-61, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</a>
          </p>
          <p><span><FaPhoneAlt /> </span>
          <a href="tel:05223514141" target="_blank" className="text-footer foot-link"> +91-522-3514141</a>
        </p>
        <p><span><FaWhatsapp className="fa-lg"/> </span>
        <a href="https://wa.me/+917347700888" target="_blank" className="text-footer foot-link"> +91-7347700888 </a></p>
        <p><span><FaEnvelope/> </span>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=customersupport@bfccapital.com&body=BODY&tf=cm" target="_blank" className="text-footer foot-link">customersupport@bfccapital.com</a>
      </p>
      
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-lg-4">
      <h4 className="text-uppercase">Latest Blog</h4>
      <hr className="mb-4 mt-0 d-inline-block hr-bottom" />
      {
            blogs.map((val) => {

           return <div className="footer-blog d-flex">
        <div className="footer-blog-img">
          <img src={val.yoast_head_json.og_image[0].url} className="img-fluid"/>
        </div>
        <div className="footer-blog-content">
          <h4> <a href={val.yoast_head_json.canonical} >{val.title.rendered}</a></h4>
          <span>{dateFormat(val.date, "mmmm dS, yyyy")}</span>
        </div>
      </div>
    })
    }
    </div>
  </div>
</div>
<hr />
<div className="text-center p-3 card border-0 bg-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-12 col-xl-12">
      <h6>© 2022 Copyright: BFC Capital. All Rights Reserved</h6> </div>
    </div>
  </div>
</div>
</section>
</footer>
</div>
{/* <div className="bg-white">
<div className="container">
<div className="row pt-50 pb-2">
  <div className="col-md-12 footer-mutual-fund">
    <p>POPULAR MUTUAL FUNDS: &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span> &nbsp; | &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span></p>
  </div>
</div>
<div className="row pb-5">
  <div className="col-md-12 footer-mutual-fund">
    <p>MUTUAL FUNDS COMPANIES: &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span> &nbsp; | &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span></p>
  </div>
</div>
</div>
</div> */}
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
);
}
export default Footer