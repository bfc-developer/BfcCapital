import React, { useEffect, useState } from 'react'
import 'animate.css';
import DowmloadApp from '../component/download-app';


const DownloadApp = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScrollPosition(scrollPosition)
  };



  return (
    <>
      <section
        className="download-apps bg-col pt-20" id="download"
      // className={scrollPosition < 150 ? "download-apps d-none" : "download-apps bg-col pt-40"}
      // ref={ref}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6" >
              <div className="download-text pt-1">
                <h3>Prodigy Pro – The smart way to invest</h3>
              </div>
            </div>
            <div className="col-md-6 pr-60" id="desktop">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 pb-lg-4">
                    <div className="download-btn">
                      <div className="header-text pt-lg-2">
                        <h5>Download our app</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="download-btn ">
                      <div className="android-btn px-lg-3">
                        {/* <a href="https://play.google.com/store/apps/details?id=com.bfc_mf.prodigy_app&pli=1" target="_blank"><img src="../assets/img/app-store.webp" className="img-fluid  download-btn-img" /> </a> */}
                        <a href="https://play.google.com/store/apps/details?id=tvs.com.bfc" target="_blank"><img src="../assets/img/app-store.webp" className="img-fluid  download-btn-img" /> </a>
                      </div>
                      {/* <div className="ios-btn">
                        <a href="https://apps.apple.com/in/app/mf-prodigy/id1575700744" target="_blank"><img src="../assets/img/play-store.webp" className="img-fluid  download-btn-img" /></a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" id="mobile">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="download-btn ">
                      <div className="android-btn px-lg-3">
                        {/* <a href="https://play.google.com/store/apps/details?id=com.bfc_mf.prodigy_app&pli=1" target="_blank"><img src="../assets/img/app-store.webp" className="img-fluid  download-btn-img" /> </a> */}
                        <a href="https://play.google.com/store/apps/details?id=tvs.com.bfc" target="_blank"><img src="../assets/img/app-store.webp" className="img-fluid  download-btn-img" /> </a>
                      </div>
                      {/* <div className="ios-btn">
                        <a href="https://apps.apple.com/in/app/mf-prodigy/id1575700744" target="_blank"><img src="../assets/img/play-store.webp" className="img-fluid  download-btn-img" /></a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="mobile-app-section"

      >
        <section className="pt-3 pb-20"  >
          <div className="container">
            <div className="row">
              <div className="col-md-8 mobile-app-info">
              <div className="mobile-app-title">
                <h2 className="pb-2">Prodigy Pro – The smart way to invest</h2>
                </div>
                {
                  scrollPosition < 150 ? <p>The one stop solution for anything and everything linked to Mutual Funds. Scheme Comparison, KYC Creation, Lumpsum, SIP, Redemption, Portfolio Tracking all in just a few clicks - Download Now !</p>
                    : null
                }
              </div>
              <div className="col-md-4">
                {/* <DowmloadApp /> */}
              </div>
            </div>
          </div>
        </section>
        <section className="download-section pt-20 pb-20 bg-color">
          <div className="container">
            <div className="first-section-content">
              <div className="row">
                {/* ==================== Mobile view Start ================== */}
                <div id="mobile">
                  <div className="col-md-6 d-flex">
                    <div className="align-self-center pb-5">
                      <div className="first-section-text">
                        <h2>One Simple App for MF <br />Investment</h2>
                        <p>Invest in over 1,500 Mutual Fund schemes on the go. Prodigy Pro offers a user-friendly interface, making investing in Mutual Funds a hassle-free experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ==================== Mobile view End ================== */}
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="align-self-center">
                    <div className="download-section-img">
                      <img src="../assets/img/mobile-app/1.webp" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex" id="desktop">
                  <div className="align-self-center">
                    <div className="first-section-text">
                      <h2>One Simple App for MF <br />Investment</h2>
                      <p>Invest in over 1,500 Mutual Fund schemes on the go. Prodigy Pro offers a user-friendly interface, making investing in Mutual Funds a hassle-free experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="download-section pt-50 pb-30">
          <div className="download-application">
            <div className="container">
              <div className="download-inner">
                <div className="first-section-content">
                  <div className="row">
                    <div className="col-md-6 d-flex txt-center">
                      <div className="align-self-center">
                        <div className="first-section-text pb-lg-5">
                          <h2>Seamless Registration</h2>
                          <p>Registering with Prodigy Pro is quick and trouble-free. Just follow the suggested steps and you should be good to go in under a minute.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      <div className="align-self-center">
                        <div className="download-section-img">
                          <img src="../assets/img/mobile-app/2.webp" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="download-section pt-50 pb-30 bg-color">
          <div className="container">
            <div className="first-section-content">
              <div className="row">
                {/* ==================== Mobile view Start ================== */}
                <div id="mobile">
                  <div className="col-md-6 d-flex">
                    <div className="align-self-center pb-lg-5">
                      <div className="first-section-text">
                        <h2>Know Your Risk Profile & Get the Right Scheme for You</h2>
                        <p className="download-app-info p-0">
                          <ul>
                            <li>Step1 : Update the required information to know your risk profile.</li>
                            <li>Step2 :  Our unique algorithm will analyse hundreds of schemes from multiple companies. </li>
                            <li>Step3 :  You will be presented with the right schemes as per your risk profile. </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ==================== Mobile view End ================== */}
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="align-self-center">
                    <div className="download-section-img">
                      <img src="../assets/img/mobile-app/3.webp" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center" id="desktop">
                  <div className="align-self-center pb-lg-5">
                    <div className="first-section-text">
                      <h2>Know Your Risk Profile & Get the Right Scheme for You </h2>
                      <p className="download-app-info p-0">
                        <ul>
                          <li>Step1 :  Update the required information to know your risk profile.</li>
                          <li>Step2 :  Our unique algorithm will analyse hundreds of schemes from multiple companies. </li>
                          <li>Step3 :  You will be presented with the right schemes as per your risk profile. </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="download-section pt-50 pb-30">
          <div className="download-application">
            <div className="container">
              <div className="download-inner">
                <div className="first-section-content">
                  <div className="row">
                    <div className="col-md-6 d-flex txt-center">
                      <div className="align-self-center pb-lg-5">
                        <div className="first-section-text">
                          <h2>Plan Your Goals The Smart Way</h2>
                          <p>No job is too difficult if you have access to the right tool. <br />Prodigy Pro has a Financial Calculator for every purpose, Child Education Planning, Home Loan Calculator, Retirement Planning, etc. Access the Financial Calculator best suited to your goals and let it deduce the amount you should be investing to achieve the targeted corpus. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      <div className="align-self-center">
                        <div className="download-section-img">
                          <img src="../assets/img/mobile-app/4.webp" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="download-section pt-50 pb-30 bg-color">
          <div className="container">
            <div className="first-section-content">
              <div className="row">
                {/* ==================== Mobile view Start ================== */}
                <div id="mobile">
                  <div className="col-md-6 d-flex justify-content-center">
                    <div className="align-self-center pb-lg-5">
                      <div className="first-section-text">
                        <h2>Simple & Safe Transactions  </h2>
                        <p>Prodigy Pro comes equipped with multi-level encryption to keep all investor transactions and data safe. Also, transacting on the app is super easy and hassle-free. </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ==================== Mobile view End ================== */}
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="align-self-center">
                    <div className="download-section-img">
                      <img src="../assets/img/mobile-app/5.webp" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center" id="desktop">
                  <div className="align-self-center pb-lg-5">
                    <div className="first-section-text">
                      <h2>Simple & Safe Transactions </h2>
                      <p>Prodigy Pro comes equipped with multi-level encryption to keep all investor transactions and data safe. Also, transacting on the app is super easy and hassle-free. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="download-section pt-50 pb-30">
          <div className="download-application">
            <div className="container">
              <div className="download-inner">
                <div className="first-section-content">
                  <div className="row">
                    <div className="col-md-6 d-flex txt-center">
                      <div className="align-self-center pb-lg-5">
                        <div className="first-section-text">
                          <h2> Family Portfolio </h2>
                          <p>With Prodigy Pro you can monitor and manage your entire family's Mutual Fund investments from one platform, that too within a few clicks. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      <div className="align-self-center">
                        <div className="download-section-img">
                          <img src="../assets/img/mobile-app/6.webp" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="download-section pt-50 pb-30 bg-color">
          <div className="container">
            <div className="first-section-content">
              <div className="row">
                {/* ==================== Mobile view Start ================== */}
                <div id="mobile">
                  <div className="col-md-6 d-flex justify-content-center">
                    <div className="align-self-center pb-lg-5">
                      <div className="first-section-text">
                        <h2>Portfolio Review- Get Periodical Reviews  </h2>
                        <p>Get your Portfolio reviewed and rebalanced twice a year so a bad investment does not eat into your returns. The cherry on top, the service is absolutely free of charge. </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ==================== Mobile view End ================== */}
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="align-self-center">
                    <div className="download-section-img">
                      <img src="../assets/img/mobile-app/7.webp" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center" id="desktop">
                  <div className="align-self-center pb-5">
                    <div className="first-section-text">
                      <h2>Portfolio Review- Get Periodical Reviews  </h2>
                      <p>Get your Portfolio reviewed and rebalanced twice a year so a bad investment does not eat into your returns. The cherry on top, the service is absolutely free of charge. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default DownloadApp;