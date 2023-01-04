import React from 'react'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import 'animate.css';

const MutualFund = () => {
  
return (
<>
<section className="pt-lg-60 pt-sm-60 pb-4 bg-color">
  <div className="container">
    <div className="row">
    <div className="col-md-5" id="mobile">
        <div className="mutual-fund-img">
          <img src="../assets/img/mutual-fund.webp" className="img-fluid"/>
        </div>
        
      </div>

      <div className="col-md-7">
        <div className="mutual-fund-text">
          <h2>Mutual Funds</h2>
          <div className="pageTitleBorder"></div>
          <p>Mutual Funds are among the best investment options out there because of their inherent versatility, so much so that they are a good fit for seasoned and new investors alike. However, the same versatility makes identifying the best mutual fund schemes tricky. That said, it can still be done with some proper, first-hand research.</p>
          <p>Read on to figure out how. </p>
          <div className="pt-3">
            <Button className="btn3" variant="outline-primary" href="https://bfccapital.com/prodigypro/" target="_blank"> Invest Now</Button>{' '}
          </div>
        </div>
      </div>
      <div className="col-md-5" id="desktop">
        <div className="mutual-fund-img">
          <img src="../assets/img/mutual-fund.webp" className="img-fluid"/>
        </div>
        
      </div>
    </div>
  </div>
</section>
{/* ==================== Eaq Section Start ================== */}
<section className="fqa mutual-fund-faq">
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
              <Accordion.Header><span className="faqs_greenDot"></span> What is a Mutual Fund ? </Accordion.Header>
              <Accordion.Body>
                <p>A Mutual Fund is a financial vehicle constituted by an Asset Management Company (AMC) after compiling the corpus accumulated through the contributions of several investors who have similar investment goals. Thereafter, the AMC onboards a fund manager for fulfilling the investment objective. The fund manager is tasked with investing the accumulated money across asset classes to earn gains on the investor’s behalf.</p>
                <p>In simpler terms, Mutual Funds are an individual’s entry ticket to professionally managed portfolios that comprise all sorts of financial assets, including equities, bonds, and other securities. Consequently, the investor becomes a stakeholder in the gains manifested by the fund over time.</p>
              </Accordion.Body>
              <div className="faqs_btm_border"></div>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><span className="faqs_greenDot"></span> Why you should invest in Mutual Funds ?</Accordion.Header>
              <Accordion.Body>
                <p>Want to buy a new car 5 years from now? With Mutual Funds, you just might be able to compound the needed corpus with time to spare. Or maybe you are thinking long term and want to save for retirement or to buy a house. Regardless, the asset class you invest your money in should have the potential to match inflation rates, if not beat them, and simultaneously override any market fluctuations.</p>
                <p>Rupee cost averaging, compounding, and diversification, this trifecta alone ensures that the money parked in Mutual Funds appreciates expeditiously to meet your financial goals, and no unforeseen factor eats into the gains you have made. Also, certain schemes can help you save approximately Rs. 46,800 in tax in case you need more reasons to invest in Mutual Funds.</p>
              </Accordion.Body>
              <div className="faqs_btm_border"></div>
              
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><span className="faqs_greenDot"></span> Advantages of Mutual Funds </Accordion.Header>
              <Accordion.Body>
                <p>Some of the many advantages of investing in Mutual Funds:</p>
                <p><b>1.</b> Mutual Funds allow wealth creation with small contributions through SIPs. Also, SIPs override market volatility over the long term by purchasing additional units in a dipping market.</p>
                <p><b>2.</b> Online access allows real-time monitoring of fund performance. Moreover, there is no lock-in under open-ended Mutual Funds, making them a very liquid investment.</p>
                <p><b>3.</b> Mutual Funds invest money across asset classes, which neutralizes risks, as one asset class can compensate for any dip in returns witnessed by another.</p>
                <p><b>4.</b>  Individuals can invest in Mutual Funds that suit their purpose. This allows them to achieve their goals in a calculated manner.</p>
                <p><b>5.</b> Certain equity-linked schemes offer tax benefits, wherein the investor can save up to Rs. 46,800 in tax.</p>
                <p><b>6.</b> The possibility of non-compliance in Mutual Funds is negligible as they are monitored by SEBI and AMFI. Also, SEBI takes regular steps to ensure investor interest is protected and all possible benefits are passed on to them.</p>
              </Accordion.Body>
              <div className="faqs_btm_border"></div>
            </Accordion.Item>
            
            <Accordion.Item eventKey="3">
              <Accordion.Header><span className="faqs_greenDot"></span> Types of Mutual Funds </Accordion.Header>
              <Accordion.Body>
                <p><b>Equity Mutual Funds:</b> Equity funds primarily invest in stocks. You invest your money in the fund via an SIP or in a lumpsum which then invests it in various equity stocks on your behalf. The consequent gains or losses accrued in the portfolio affect your fund's Net Asset Value (NAV).</p>
                <p><b>Debt Mutual Funds:</b> Debt funds (also known as a fixed-income fund) invest a significant portion of your money in fixed-income securities like government securities, debentures, corporate bonds and other money-market instruments.</p>
                <p><b>Hybrid Mutual Funds:</b> Hybrid funds invest in both debt and equity instruments to achieve diversification and avoid the concentration risk. A perfect blend of the two offers higher returns than a regular debt fund without being as risky as equity funds. The choice of a hybrid fund depends on your risk preferences and investment objective.</p>
                
                
              </Accordion.Body>
              <div className="faqs_btm_border"></div>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header> <span className="faqs_greenDot"></span>  Reasons to invest with us </Accordion.Header>
              <Accordion.Body>
                <p>Assuming that you are weighing the pros and cons of associating with us, we will lay out for you our values and practices.</p>
                <p><b>1.</b> A financial plan is like a diet chart, which cannot fit everyone. We at BFC Capital understand your needs, requirements and risk profile before prescribing a financial solution.  </p>
                <p><b>2.</b> By keeping an eye on every movement of the market, we try to boost the immunity of portfolios. For this, we subject your investments to a half-yearly health checkup.</p>
                <p><b>3.</b> With a team of competent wealth managers, who are handpicked after a great deal of scrutiny, we maintain high standards in the area of financial management. Each of them is groomed to understand every nuance of financial planning.</p>
                <p><b>4.</b> Selecting a suitable scheme out of approximately 2,000 Mutual Fund Schemes is a Herculean task for a new investor. Our unique algorithm helps investors in this aspect.</p>
                <p><b>5.</b> At times, the market can present investors with certain short-term opportunities. We help our clients exploit such opportunities in an efficient manner.</p>
                <p><b>6.</b> With the help of our unique techniques on Capital Gain Tax, we help our clients reduce their tax liabilities in a legitimate manner.</p>
                
              </Accordion.Body>
              <div className="faqs_btm_border"></div>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ====================  Eaq Section End ================== */}
</>
)
}
export default MutualFund;