import React from 'react';
import Nav_Chart from '../component/sheme-chart';
import { FaStar} from 'react-icons/fa';
import TabPanel from '../component/invest-now';


function SchemePerformanceSingle() {
  return (
    <>
      <section className="pt-80 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="scheme-img pb-4">
                <img src="../assets/img/scheme/idfc.webp" className="img-fluid mxw-100" />
              </div>
              <div className="scheme-name pb-3">
                <h4>IDFC Tax Advantage (ELSS) Fund-Growth-Regular Plan</h4>
              </div>
              <div className="scheme-data pb-3">
                <h5>25%  <span className="scheme-year">3Y annualised</span></h5>
              </div>
              <div className="pt-1">
                <Nav_Chart />
              </div>
              <div className="col-md-8 offset-md-2">
                  <div className='nav d-flex justify-content-between nav-h'>
                    <div className="duration-tab">
                      <a href="#">1M</a>
                    </div>
                    <div className="duration-tab">
                      <a href="#">6M</a>
                    </div>
                    <div className="duration-tab">
                      <a href="#">1Y</a>
                    </div>
                    <div className="duration-tab">
                      <a href="#">3Y</a>
                    </div>
                    <div className="duration-tab">
                      <a href="#">5Y</a>
                    </div>
                    <div className="duration-tab">
                      <a href="#">7Y</a>
                    </div>
                    <div className="duration-tab">
                      <a href="#">All</a>
                    </div>
                  </div>
                </div>
                <div className="row pt-50 scheme-info">
                <div className="col-md-6  brd-right">
                  <div className="row">
                    <div className="col-md-6">
                      <p>NAV: 12 Aug-2022</p></div>
                    <div className="col-md-6 text-secondary"><p> ₹134.56 </p></div>
                    </div> 
                    <div className="row">
                    <div className="col-md-6">
                      <p>Min. SIP amount</p></div>
                    <div className="col-md-6 text-secondary"><p> ₹1,911 Cr </p></div>
                    </div> 
                  </div>
                <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                      <p>Rating</p></div>
                    <div className="col-md-6 text-secondary"><p> 5 <span> <FaStar /> </span> </p></div>
                    </div> 
                    <div className="row">
                    <div className="col-md-6">
                      <p>Fund Size</p></div>
                    <div className="col-md-6 text-secondary"><p> ₹36,871.42Cr </p></div>
                    </div> 
                </div>
                </div>
                {/* <div className="pt-50 text-right">
                <button className='btn-custom float-right'>Invest Now</button>
              </div> */}
            </div>
            <div className="col-md-4">
              <div className="invent-now">
                <TabPanel />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} export default SchemePerformanceSingle;

