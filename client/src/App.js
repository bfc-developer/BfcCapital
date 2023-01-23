import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/home";
import MutualFund from "./pages/mutual-fund";
import SipCalculator from "./pages/sip-calculator"
import LumpsumCalculator from "./pages/lumpsum-calculator"
import BestMutualFund from "./pages/best-mutual-funds-to-invest-in-2023"
import ElssMutualFund from "./pages/best-elss-funds";
import SipPlans from "./pages/best-sip-plans-to-invest";
import TaxSaving from "./pages/tax-saving-mutual-fund";
import LumpsumInvestment from "./pages/best-mutual-fund-for-lumpsum-investment";
import About from "./pages/about";
import RetirementCalculator from "./pages/retirement-planning-calculator";
import ChildEducationCalculator from "./pages/child-education-planning-calculator";
import ChildMarriageCalculator from "./pages/child-marriage-planning-calculator";
import HomeLoanCalculator from "./pages/home-loan-emi-calculator";
import ElssCalculator from "./pages/elss-calculator";
import FdCalculator from "./pages/fd-calculator";
import MutualFundCalculator from "./pages/mutual-fund-calculator";
import Contact from "./pages/contact-us";
import DownloadApp from "./pages/download-app";
import Careers from "./pages/careers";
import WealthManager from "./pages/wealth-manager"; 
import VirtualRelationshipManager from "./pages/virtual-relationship-manager";
import RelationshipManager from "./pages/relationship-manager";
import Request_a_Callback from "./pages/request-a-callback";
import Privacy_Policy from "./pages/privacy-policy";
// import NewFundOffers from "./pages/new-fund-offers"

// import {BasicTabs} from "./pages/scheme-performance";
// import SchemePerformanceSingle from "./pages/scheme-performance-single"
import BackTopBack from "./component/back-to-top";

const App = () => {

  return (
  
    <>

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mutual-fund" element={<MutualFund />}></Route>
        <Route path="/sip-calculator" element={<SipCalculator />}></Route>
        <Route path="/lumpsum-calculator" element={<LumpsumCalculator />}></Route>
        <Route path="/retirement-planning-calculator" element={<RetirementCalculator />}></Route>
        <Route path="/child-education-planning-calculator" element={<ChildEducationCalculator />}></Route>
        <Route path="/child-marriage-planning-calculator" element={<ChildMarriageCalculator />}></Route>
        <Route path="/home-loan-emi-calculator" element={<HomeLoanCalculator />}></Route>
        <Route path="/elss-calculator" element={<ElssCalculator />}></Route>
        <Route path="/fd-calculator" element={<FdCalculator />}></Route>
        <Route path="/mutual-fund-calculator" element={<MutualFundCalculator />}></Route>
        <Route path="/best-mutual-funds-to-invest-in-2023" element={<BestMutualFund />}></Route>
        <Route path="/best-elss-funds" element={<ElssMutualFund />}></Route>
        <Route path="/best-sip-plans-to-invest" element={<SipPlans />}></Route>
        <Route path="/tax-saving-mutual-fund" element={<TaxSaving />}></Route>
        <Route path="/best-mutual-fund-for-lumpsum-investment" element={<LumpsumInvestment />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/download-app" element={<DownloadApp />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/wealth-manager" element={<WealthManager />}></Route>
        <Route path="/relationship-manager" element={<RelationshipManager />}></Route>
        <Route path="/virtual-relationship-manager" element={<VirtualRelationshipManager />}></Route>
        <Route path="/request-a-callback" element={<Request_a_Callback />}></Route>
        <Route path="/privacy-policy" element={<Privacy_Policy />}></Route>
        {/* <Route path="/new-fund-offers" element={<NewFundOffers />}></Route> */}

        {/* <Route path="/scheme-performance" element={<BasicTabs/>}></Route>
        <Route path="/scheme-performance-single" element={<SchemePerformanceSingle/>}></Route> */}
        
        {/* <Route path="/*" element={Home} /> */}
        <Route path="/*" component={Home} ></Route>
        
      </Routes>

       <section className="back-to-top">
        <BackTopBack />
      </section>
      <Footer/>
    </BrowserRouter>
    
         
    </>
  );
}

export default App;
