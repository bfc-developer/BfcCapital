import React from 'react';

function DowmloadApp() {
    return (
        <section className="bg-col">
        <div className="container">
          <div className="row justify-content-center">
            <div className="container">
              <div className="download-btn">
                <div className="header-text pt-lg-2 pb-3">
                  <h5>Download our app</h5>
                </div>
              </div>
              </div>
              <div className="col-md-6">
              <div className="download-btn ">
                <div className="android-btn px-lg-3">
                  <a href="https://play.google.com/store/apps/details?id=com.bfc_mf.prodigy_app&pli=1" target="_blank"><img src="../assets/img/app-store.webp" className="img-fluid  download-btn-img"/> </a>
                </div>
                <div className="ios-btn">
                  <a href="https://apps.apple.com/in/app/mf-prodigy/id1575700744" target="_blank"><img src="../assets/img/play-store.webp" className="img-fluid  download-btn-img"/></a>
                </div>
              </div>
                </div>
            </div>
            </div>
           
      </section>
    );
  } 
  export default DowmloadApp;