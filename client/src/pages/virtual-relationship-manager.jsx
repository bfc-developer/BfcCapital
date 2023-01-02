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

const VirtualRelationshipManager = () => {
  const [show, setShow] = useState(false);

  const [Name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState('');
  const [PostAppliedFor, setPostAppliedFor] = useState('Virtual Relationship Manager');
  const [Cv, setCv] = useState('');

  const vertualRelationship = (e) => {
    e.preventDefault();
    if (Name != '' || Mobile != '' || Email != '' || PostAppliedFor != '' || Cv != '') {

      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[6789]\d{9}$/;
      const PhoneValid = mobPattern.test(Mobile);
      if (PhoneValid == false) {
        toast.error("Please Enter Valid Mobile Number!");
      } else {
        const formData = new FormData()
        formData.append('Name', Name)
        formData.append('Mobile', Mobile)
        formData.append('Email', Email)
        formData.append('PostAppliedFor', PostAppliedFor)
        formData.append('Cv', Cv)
        console.log("formData", formData);
        axios.post(globalUrl.commonUrl+'vertual-relation-manager', formData).then((res) => {
          console.log("asaad", res);

          setName('');
          setMobile('');
          setEmail('');
          setPostAppliedFor('');
          setShow(true);
          document.getElementById("fileControl").value = "";

        }).catch((err) => {
          if (err) {
            toast.error("Something is Else !");
          }
        })

      }
    } else {
      toast.error("Required All Filled!");
    }

  }

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <section className="pt-40 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="job-header ">
                <h2><span className="sub-color"><b>Position:-</b></span> Virtual Relationship Manager</h2>
                <p className="sub-text-1">Note: Female candidates Only</p>
                <div className="job-desciption pt-40">
                  <h4 className="pb-3">Preface :</h4>
                  <p>The VRM will be required to attend Leads assigned to her on Call and promote services of the company, brief Clients about the Benefits of associating with us and handle operational and technical issues of Acquired Clients</p>
                </div>
                <ToastContainer />

                <div className="job-desciption pt-30">
                  <h4 className="pb-3">Skills Required :</h4>
                  <p><b>&#x2022;</b> Convincing Skills | Analytical Skills | Inter Personal Skills</p>
                  <p><b>&#x2022;</b> Interest towards Sales </p>
                  <p><b>&#x2022;</b> Inclination towards Finance</p>
                  <p><b>&#x2022;</b> Ability to make 60-80 Telephonic Calls per Day</p>
                </div>
                <div className="job-desciption pt-50">
                  <h4 className="pb-lg-4  pb-sm-4"><b>Job Location : </b> <spn className="jd-subtext">Hybrid Model : Work from Office + Home</spn></h4>
                  <h4 className="pb-lg-4  pb-sm-4"><b>Address : </b> <spn className="jd-subtext"> CP-61 Viraj Khand, Gomti Nagar, Lucknow (UP)-226010</spn></h4>
                  <h4 className="pb-lg-4  pb-sm-4"><b>Vacancy Type : </b><spn className="jd-subtext">Full Time</spn></h4>
                  <h4 className="pb-lg-4  pb-sm-4"><b>Package : </b> <spn className="jd-subtext">– Rs. 1.5 L to 2.5 L per annum + <b>Incentive</b></spn></h4>
                  <h4 className="pb-lg-4  pb-sm-4"><b>Experience : </b> <spn className="jd-subtext">1 year</spn></h4>
                  <h4 className="pb-lg-4  pb-sm-4"><b>Qualification  : </b> <spn className="jd-subtext">Graduation</spn></h4>

                </div>
                <p className="resume pt-20">You can send in your resume to <span className="sub-text"><a href="mailto:hrd@bfccapital.com">hrd@bfccapital.com</a></span></p>
                <p className="sub-text-1"><a href="../assets/img/jd/JD_Virtual_RM.pdf" target="_blank">Click here to view detailed JD</a></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="job-form result-content-shadow">
                <div className="contact-form-header">
                  <h2 className="pb-5">Apply for this job</h2>
                </div>

                <Form onSubmit={vertualRelationship}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" value={Mobile} onChange={(e) => setMobile(e.target.value)} required minLength='10' maxlength='10' />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Post Applied For?</Form.Label>
                      <Form.Control type="text" value={PostAppliedFor} onChange={(e) => setPostAppliedFor(e.target.value)} />
                    </Form.Group>
                  </Row>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Resume/CV</Form.Label>
                    <Form.Control type="file" id="fileControl" name="Cv" onChange={(e) => setCv(e.target.files[0])} />
                  </Form.Group>
                  {/* onClick={handleShow} */}
                  <Button className="btn3 mt-3" type='submit' variant="outline-primary"> Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                  <h2>Thank you for reaching out to us!</h2>
                  <p>Your request has been received and acknowledged at our end.Our HR Department will get in touch with you shortly.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="btn3" variant="outline-primary" onClick={handleClose}>
                    Close
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
export default VirtualRelationshipManager;