import React,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import minus from "../assets/img/minus.webp"
import plus from "../assets/img/add.webp"
import 'animate.css';
import { Doughnut } from "react-chartjs-2";
import axios from 'axios';
import $ from 'jquery';
import CalculaterApiUrls from  '../CalculaterApiUrls/urls'



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

function HomeLoanCalculator() {
const [loanAmount,setLoanAmount] = useState(1000000);
const [interestRate,setInterestRate] = useState(10);
const [tenure,setTenure] = useState(10);
const [totalAmount,setTotalAmount] = useState('15,85,800');
const [totalIntrest,setTotalIntrest] = useState('5,85,800');
const [loan,setLoan] = useState('10,00,000');
const [emi,setEmi] = useState('13,215');
const [loaded, setLoaded] = useState(true); 
 const [chartTotalIntrest, setChartTotalIntrest] = useState(585800);
const [chatPrincipleAmount, setChartPrincipleAmount] = useState(1000000);

const data1= { datasets: [
    {
      label: "Hours Studied in Geeksforgeeks",
      data: [chartTotalIntrest, chatPrincipleAmount],
      backgroundColor: ["#F06D70", "#97C5FB"],
    }
  ],
  labels: ["Total Interest", "Principle Amount"]
}


 

  const loanEMiCalculater = () =>{
    setLoaded(!loaded)

    const data = {
      loanAmount: loanAmount,
      rateIntrest: interestRate,
      tanureYear: tenure
  };

  axios.post(CalculaterApiUrls.commonUrl+'emi', data).then((res) => {
      console.log("lllllll", res.data);
     
      setEmi(res.data.emi)
      setLoan(res.data.loan_amount)
      setTotalIntrest(res.data.total_interest)
      setTotalAmount(res.data.total_amount)
      setLoaded(loaded)

      $(document).scrollTop($("#result").height());

      let s = (res.data.total_interest).replace(/,/g, "")
      s = parseInt(s);
      let g = (res.data.loan_amount).replace(/,/g, "")
      g = parseInt(g);
      setChartTotalIntrest(s);
      setChartPrincipleAmount(g);


  })

  }

 


// for Approx cost

  let incLoanAmount = () => {
    if (loanAmount<50000000) {
      setLoanAmount(Number(loanAmount) + 500);
    }
    else if (loanAmount == 0) {
      setLoanAmount(Number(loanAmount) + 500);
    }

  };
  let decLoanAmount = () => {
    if (loanAmount >= 500) {

      setLoanAmount(loanAmount - 500);
    }
    else if (loanAmount < 499) {
      setLoanAmount(0);
    }
  }

  let incInterestRate = () => {
    if(isNaN(interestRate)){
      return setInterestRate(0)
    }
    if (interestRate < 50) {
      setInterestRate((parseFloat(interestRate) + .05).toFixed(2));
      // console.log(interestRate);
    }
  };
  let decInterestRate = () => {
    if (interestRate > 1) {
      setInterestRate((parseFloat(interestRate) - .05).toFixed(2));
    }
  }

  let incTenure= () => {
    if (tenure< 50) {
      setTenure(Number(tenure) + .5);
    }
  };
  let decTenure= () => {
    if (tenure> 1) {
      setTenure(tenure- .5);
    }
  }


  return (
    <>
      <section className="pt-lg-3 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="pt-lg-3 mt-3 pb-lg-4">Home Loan EMI Calculator</h2>
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
          <div class="mt-3 calculator">
            <div class="" role="tabpanel">
              <section>
                <div className="results">
                  <div className="shadow-pro br-50 px-4 pb-lg-5 pb-sm-5">
                    <section className="pt-lg-5 pb-sm-5 pb-lg-5">
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <label for="m-saving" className="text-label font-weight-500 py-2">
                            Enter loan amount (₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decLoanAmount}></img>
                            <input type="text" className="form-control" name="m-saving" value={loanAmount}  placeholder="0"
                               

                                onChange={(e) => {
                                if(e.target.value>=0&&e.target.value<=50000000){
                                if(e.target.value.includes('.')){
                                  setLoanAmount(Math.round(parseInt(e.target.value)))
                                  console.log("with float ",parseInt(e.target.value));
                                }else{
                                  setLoanAmount(e.target.value)
                                }
                              }
                              else if(e.target.value>50000000){
                                setLoanAmount(50000000)

                              }
                                }}
                                />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incLoanAmount}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="year" className="text-label font-weight-500 py-2 mt-1">
                            Enter Interest rate (%)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decInterestRate}></img>
                            <input type="number" className="form-control" name="year" value={interestRate}  placeholder="0"
                           

                            onChange={(e) => {
                              if (e.target.value >= 0 && e.target.value <= 50) {
                                if (e.target.value.includes('.')) {
                                  let a = parseFloat(e.target.value)
                                  setInterestRate(parseFloat((a).toFixed(2)))
                                  console.log("with float ", parseFloat(e.target.value));
                                } else {
                                  console.log("with int ", parseInt(e.target.value))
                                  let a = parseInt(e.target.value)
                                  setInterestRate(parseInt(a))
                                }
                              }
                              else {
                                setInterestRate(50)
                              }
                            }} 
                            />
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incInterestRate}></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label for="return" className="text-label font-weight-500 py-2">
                            Tenure (years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img src={minus} alt="" className="img-fluid max-27" onClick={decTenure}></img>
                            <input type="text" className="form-control" name="return" value={tenure}  placeholder="0"
                             
                               
                              onChange={(e) => {
                                if(e.target.value>=0&&e.target.value<=50){
                                if(e.target.value.includes('.')){
                                  setTenure(Math.round(parseInt(e.target.value)))
                                  console.log("with float ",parseInt(e.target.value));
                                }else{
                                  setTenure(e.target.value)
                                }
                              }
                              else if(e.target.value>50){
                                setTenure(50)

                              }
                                }}/>
                            <img src={plus} alt="" className="img-fluid max-27" onClick={incTenure}></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 pt-lg-4 text-right text-xs-center">
                        <button className="new-btn1 mt-3" onClick={loanEMiCalculater}> Calculate</button>
                      </div>
                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3" id="result">

                    <div className="col-md-8 py-lg-5 mb-3" id="mobile">
                        <div className="pt-4 result-chart"  >
                          <Doughnut className="chart" data={data1} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                          }}
                            width={638} height={341} />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="result-content result-content-shadow-pro">
                        <div className="result-title text-center">
                          <h2>Result</h2>
                        </div>
                          <ul className="text-center">
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Your EMI (₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">{emi}</div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Principal(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">{loan}</div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Total Interest(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">{totalIntrest}</div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Total Amount(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">{totalAmount}</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8 py-lg-5" id="desktop">
                        <div className="pt-4 result-chart"  >
                          <Doughnut className="chart" data={data1} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                          }}
                            width={638} height={341} />
                        </div>
                      </div>
                    </div>
                    <div className="row px-5 pt-lg-5 pt-sm-5">
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
                    <Accordion.Header><span className="faqs_greenDot"></span> What is a Home Loan EMI Calculator ?</Accordion.Header>
                    <Accordion.Body>
                      <p>A Home Loan EMI Calculator helps compute the EMI or monthly installments a potential home loan is likely to attract based on certain inputs provided by the user. The logic governing this online tool takes into account the inputs provided to deduce the desired projection.</p>
                      <p>The user can manipulate outcomes by shuffling between permutations and combinations to arrive at a pocket-friendly installment plan, based on which he or she can run home loan comparisons, and consequently make well-informed financial decisions.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="faqs_greenDot"></span> How does EMI calculation help in planning a home purchase ?</Accordion.Header>
                    <Accordion.Body>
                      <p>The EMI payable against a home loan is one of the deciding factors behind shortlisting loan offers. An advance estimation of this upcoming monthly liability helps homebuyers make the financial arrangements needed. This is where a Housing Loan EMI Calculator comes in handy.</p>
                      <p>This online tool helps potential homebuyers compute the liability availing a home loan is likely to attract and the finances needed for it. Based on the estimations provided, homebuyers can compare the loan offers extended by banks to arrive at a repayment plan that suits their needs and financial constraints.</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="faqs_greenDot"></span>How much Home Loan should one take ?</Accordion.Header>
                    <Accordion.Body>
                      <p>"Herein, the right question to be asked is, “How much can one afford ?” Usually, banks make sure that the EMI payable against the loan availed does not exceed 40% of the borrower’s monthly income. Borrowers should also take note that their total outgo towards outstanding loans should not go beyond 50% of their monthly income. Besides this, the loan should be availed for the shortest possible tenure.</p>
                      <p>The longer the tenure of a loan is, the lesser the monthly installment amounts to. This proposition makes opting for longer loan tenures very tempting. Borrowers should, however, avoid falling into this trap, as longer tenures attract higher interest rates.</p>
                      <p>Simply put, the longer the tenure of your home loan is, the more compound interest you will end up paying the banks, this is the universal logic governing the relationship between loans and tenure."</p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="faqs_greenDot"></span>How to use Home Loan EMI Calculator ?</Accordion.Header>
                    <Accordion.Body>
                      <p>The logic governing Home Loan EMI Calculators takes into account certain factors to deduce the EMI payable post disbursement. These include the amount the user is looking to borrow for purchasing the house of his choice, the tenure he is looking to repay the loan in, and the rate of interest the outstanding is likely to attract.</p>
                      <p>The potential borrower needs to hit the “Calculate” button after entering these values, following which the estimated installment amount or the EMI payable against the loan shall start reflecting. The user can shuffle between permutations and combinations to arrive at an acceptable outcome.</p>
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
export default HomeLoanCalculator;