import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import minus from "../assets/img/minus.webp"
import plus from "../assets/img/add.webp"
import 'animate.css';
import 'chartkick/chart.js';
import Select from 'react-select';
import axios from 'axios'
import $ from 'jquery';
import CalculaterApiUrls from '../CalculaterApiUrls/urls'


import LoadingOverlay from "react-loading-overlay";
import "./styles.css";
import styled, { css } from "styled-components";
const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${props =>
    props.disappear &&
    css`
      display: block; /* show */
    `}
`;

const LumpsumCalculator = () => {
  const [investment, setInvestment] = useState(12500);
  const [taxSlab, setTaxSlab] = useState(5);
  const [taxTotalSaved, setTaxTotalSaved] = useState(650);
  const [loaded, setLoaded] = useState(true);

  const slab = [
    { value: "5", label: "5%" },
    { value: "20", label: "20%" },
    { value: "30", label: "30%" },
  ];

  const calculateElss = () => {
    setLoaded(!loaded)

    const data = {
      investment: investment,
      period: taxSlab
    };

    axios.post(CalculaterApiUrls.commonUrl + 'elss', data).then((res) => {

      setTaxTotalSaved(res.data.data)
      $(document).scrollTop($("#result").height());

      setLoaded(loaded)

    })
  }
  let incInvestment = () => {
    if (investment<10000000) {
      setInvestment(Number(investment) + 500);
    }
    else if (investment == 0) {
      setInvestment(Number(investment) + 500);
    }

  };
  let decInvestment = () => {
    if (investment >= 500) {

      setInvestment(investment - 500);
    }
    else if (investment < 499) {
      setInvestment(0);
    }
  }

  return (
    <>
      <section className="pt-lg-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pt-3 pb-lg-4">ELSS Calculator</h2>

            </div>
          </div>
          <DarkBackground disappear={!loaded}>

            <LoadingOverlay
              active={true}
              style={{ color: "red" }}
              // spinner={<BounceLoader />}
              spinner={true}

            >
              {/* <p>Some content or children or something.</p> */}
            </LoadingOverlay>
          </DarkBackground>
          <div class=" mt-3 calculator">
            <div class="" role="tabpanel">
              <section>
                <div className="results">
                  <div className="shadow-pro br-50 px-4 pb-lg-5 pb-sm-5">
                    <section className="pt-lg-5 pb-lg-5 pt-sm-5 pb-sm-5">
                      <div className="row">

                        <div className="col-md-6 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2">
                            Investment Amount(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decInvestment}></img>
                            <input type="text" className="form-control" name="m-saving"  value={investment} placeholder="0"
                               
                              
                              onChange={(e) => {
                                if(e.target.value>=0&&e.target.value<=10000000){
                                if(e.target.value.includes('.')){
                                  setInvestment(Math.round(parseInt(e.target.value)))
                                  console.log("with float ",parseInt(e.target.value));
                                }else{
                                  setInvestment(e.target.value)
                                }
                              }
                              else if(e.target.value>10000000){
                                setInvestment(10000000)

                              }
                                }} />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incInvestment}></img>
                          </div>
                        </div>
                        <div className="col-md-6 text-center">
                          <label for="year" className="text-label font-weight-500 py-2">
                            Select Your Tax Slab
                          </label>
                          <Select className='inputf transcard' options={slab}  placeholder={`${taxSlab}%`} onChange={(e) => setTaxSlab(e.value)} />
                        </div>
                      </div>
                      <div className="col-md-12 pt-2 text-right text-xs-center">
                        <button className="new-btn1 mt-lg-3" onClick={calculateElss}> Calculate</button>
                      </div>
                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3 p-lg-5" id="result">
                      <div className="col-md-4">
                        <div className="result-content">
                        <div className="result-title text-center">
                          <h2 className="pt-2">Result</h2>
                        </div>
                          <ul className="text-center">
                            <li>
                              <div className="text-label font-weight-500 py-2 mt--l5 ">
                                Total tax saved u/s 80(c)(₹)
                              </div>
                              <div className="inputf transcard bg-light-red py-2">{taxTotalSaved} *</div>
                              <p id="cases">*Inclusive of all cess</p>

                            </li>

                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="text-center">
                          <img src="../assets/img/elss.webp" className="img-fluid mx-wd" />
                        </div>
                      </div>
                    </div>
                    <div className="row px-5 pt-3">

                      <div className="col-md-12 text-right text-xs-center">
                      <a className="btn-custom" href="https://bfccapital.com/prodigypro/" target="_blank">Invest Now</a>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== Eaq Section Start ================== */}
      <section className="fqa pt-lg-3 mutual-fund-faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pb-4">
            <h4 className="fqa-top-text mb-4 pt-3">FAQs</h4>
            <div className="contact-pageTitleBorder"></div>
            </div>
          </div>
          <div className="row shadowc">
            <div className="col-md-12">
              <div className="mutual-fund-faq-content">
                <Accordion >
                  <Accordion.Item eventKey="0" className="#">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is an ELSS Calculator ? </Accordion.Header>
                    <Accordion.Body>
                      <p>An ELSS Investments Calculator is a tool used for approximating the returns investments made in the ELSS fund category may fetch over time. The algorithm governing this tool’s logic takes into account parameters like the amount to be invested in the scheme, the investment duration, and the average rate of returns expected to project the desired outcome.</p>
                      <p>Users can use this tool to deduce the compounded corpus for investments made on a monthly basis, as well as lumpsum investments.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> What is an ELSS plan ?</Accordion.Header>
                    <Accordion.Body>
                      <p>ELSS or the Equity Linked Savings Scheme is a fund that invests a major portion of its corpus in equity-related instruments, just as the name suggests. This equity-linked scheme has a compulsory lock-in period of three years and allows investors to avail tax exemptions on the invested amount, up to a limit of Rs. 150,000 a year.</p>
                      <p>This tax benefit is offered under Sec 80C of the Income Tax Act. The gains made under this scheme at the end of the lock-in period are also tax free up to a certain extent.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>

                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span> How can an ELSS Calculator help you ? </Accordion.Header>
                    <Accordion.Body>
                      <p>ELSS Calculators help investors arrive at the estimated corpus their investments are likely to compound into, over time. Herein, investors can play around with all sorts of permutations and combinations to finalize investment horizons or the amount that is to be invested in the scheme, based on the outputs reflecting on the screen.</p>
                      <p>This freedom to compare outcomes helps investors determine what they want, and consequently, make well-thought-out and informed investment choices.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="faqs_greenDot"></span> ELSS vs PPF </Accordion.Header>
                    <Accordion.Body>
                      <p>ELSS Funds tend to outperform Public Provident Fund (PPF) investments in terms of the returns fetched more often than not, which makes them an optimal investment option for those who are looking to get more than just tax benefit out of the deal. Also, ELSS funds do not carry an investment ceiling, therefore investors have the freedom to divert into the scheme, whatever amount they wish to. PPF investments, on the other hand, have a capping of Rs. 1,50,000 a year.</p>
                      <p>Moreover, ELSS Mutual Funds have a minimum mandatory lock-in of just 3 years, which makes them a more liquid investment option when compared with PPF investments, which are frozen for as many as 15 years. PPF investments, however, offer investors the freedom to avail loans and advances against the accumulated balance. Although this takes care of any emergency funding the investor may require, the advance/loan availed does attract interest and consequently eats into the returns the PPF investment may be fetching.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header><span className="faqs_greenDot"></span> Best Strategy to invest in ELSS </Accordion.Header>
                    <Accordion.Body>
                      <p>The best strategy to invest in ELSS would be to match the investment with the concerned individual’s estimated tax outgo at the end of the ongoing fiscal year. Individual taxpayers that fall in the 30% tax bracket can save up to Rs. 46,800 in tax by investing Rs. 1,50,000 in ELSS schemes.</p>
                      <p>However, the final decision should only be taken after consulting a certified wealth professional, as they have the know-how needed for cutting corners and leveraging tax provisions in the right spirit, for their investor’s benefit. Under the right circumstances, investors can end up availing maximum possible tax benefits, provided they have access to the right advice and are willing to act on it.</p>
                      <p>Investing to save tax at the end of an ongoing fiscal is something that hurts the wallet. This is why the best financial advisors recommend investing in portions, by diverting funds in a systematic investment plan through the year. Investing in SIPs regularly helps accumulate the investments needed for tax saving without much fuss or liquidating previously made investments. This, in turn, helps taxpayers make additional savings that can be mobilised for their surplus needs.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                </Accordion>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default LumpsumCalculator;