import React from 'react'
import 'animate.css';
import {FaLongArrowAltRight, FaMapMarked, FaMapMarker, FaSuitcase } from "react-icons/fa";

const Careers = () => {

return (
<>
<section className="pt-70 pb-30">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="contact-header ">
          <h2><span className="">Career</span></h2>
          <div className="pageTitleBorder"></div>
          <p>We deal in the field of Wealth Management and therefore quality of the company depends upon the quality of manpower working with it. The company regularly and continuously strives to upgrade the skills and efficiency of its work force and provides its employees a process-driven atmosphere to perform. The HR Policies of the company are one of the best in the industry and are known for their transparency.</p>
          
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="careers-header ">
          <h3>Current Openings</h3>
        </div>
      </div>
    </div>
    <div className="careers-section pt-4 pb-4">
      <div className="row">
        <div className="col-md-4 ">
          <div className="job result-content-shadow">
            <a href="/wealth-manager"><div className="contact-text">
              <h2> Wealth Manager </h2>
              <div className="contact-Border"></div>
              <div className="career pt-30 d-flex justify-content-between">
                <p><span><FaSuitcase/></span> 1 Year </p>
                <p> <span><FaMapMarker/></span> Lucknow  &nbsp;&nbsp;<span><FaLongArrowAltRight/></span> </p>
              </div>
            </div></a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="job result-content-shadow">
            <a href="/relationship-manager"><div className="contact-text">
              <h2>Relationship Manager </h2>
              <div className="contact-Border"></div>
              <div className="career pt-30 d-flex justify-content-between">
                <p><span><FaSuitcase/></span> 1 Year </p>
                <p> <span><FaMapMarker/></span> Lucknow  &nbsp;&nbsp;<span><FaLongArrowAltRight/></span> </p>
              </div>
            </div></a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="job result-content-shadow">
            <a href="/virtual-relationship-manager"><div className="contact-text">
              <h2> Virtual Relationship Manager   </h2>
              <div className="contact-Border"></div>
              <div className="career pt-30 d-flex justify-content-between">
                <p><span><FaSuitcase/></span> 1 Year </p>
                <p> <span><FaMapMarker/></span> Lucknow  &nbsp;&nbsp;<span><FaLongArrowAltRight/></span> </p>
              </div>
            </div></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
)
}
export default Careers;