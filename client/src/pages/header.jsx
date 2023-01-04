import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';

const Header = () => {
  
const [showDropdown, setShowDropdown] = useState(false);
return (
<>
<Navbar expand="lg"  sticky="top" className="custom-shadow">
  <Container fluid>
  <Navbar.Brand href="/"><img src="../assets/img/logo/bfc-logo.webp" alt='logo' className="img-fluid logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
      <ul className="navbar-nav main-menu ml-auto ">
        <li><a href="/">Home</a></li>
        <li className="menu_has_children"><a href="/mutual-fund">Mutual Funds</a>
        <ul className="sub-menu">
          <li><a href="/best-mutual-funds-to-invest-in-2023">Best Mutual Funds to Invest in 2023</a></li>
          <li><a href="/best-elss-funds">Best ELSS Funds</a></li>
          <li><a href="/best-sip-plans-to-invest">Best SIP Plans to Invest</a></li>
          <li><a href="/tax-saving-mutual-fund">Best Tax Saving Mutual Funds</a></li>
          <li><a href="/best-mutual-fund-for-lumpsum-investment">Best Mutual Fund for Lumpsum Investment</a></li>
          <li><a href="/new-fund-offers">New Fund Offers</a></li>
          {/* <li><a href="/scheme-performance">Scheme Performance</a></li> */}
        </ul>
      </li>
      <li><a href="/about">About</a></li>
      <li className="menu_has_children"><a href="#0">Planning & Solutions</a>
      <ul className="sub-menu">
        <li><a href="/sip-calculator"><img src="../assets/img/menu-icon/sip.webp" className="img-fluid menu-icon" />&nbsp; SIP Calculator</a></li>
        <li><a href="/retirement-planning-calculator"><img src="../assets/img/menu-icon/retirement.webp" className="img-fluid menu-icon" />&nbsp; Retirement Planning</a></li>
        <li><a href="/child-education-planning-calculator"><img src="../assets/img/menu-icon/education.webp" className="img-fluid menu-icon" />&nbsp; Child Education Planning</a></li>
        <li><a href="/child-marriage-planning-calculator"><img src="../assets/img/menu-icon/marriage.webp" className="img-fluid menu-icon" />&nbsp; Child Marriage Planning</a></li>
        <li><a href="/home-loan-emi-calculator"><img src="../assets/img/menu-icon/emi.webp" className="img-fluid menu-icon" />&nbsp; Home Loan EMI Calculator</a></li>
        <li><a href="/lumpsum-calculator"><img src="../assets/img/menu-icon/sip.webp" className="img-fluid menu-icon" />&nbsp; Lumpsum Calculator</a></li>
        <li><a href="/elss-calculator"><img src="../assets/img/menu-icon/elss.webp" className="img-fluid menu-icon" />&nbsp; ELSS Calculator</a></li>
        <li><a href="/fd-calculator"><img src="../assets/img/menu-icon/fd.webp" className="img-fluid menu-icon" />&nbsp; FD Calculator</a></li>
        <li><a href="/mutual-fund-calculator"><img src="../assets/img/menu-icon/mutual.webp" className="img-fluid menu-icon" />&nbsp; Mutual Fund Calculator</a></li>
      </ul>
    </li>
    <li><a href="https://bfccapital.com/blog/" target="_blank">Blogs</a></li>
    <li><a href="/contact-us">Reach Us</a></li>
    <li><a href="/careers">Career</a></li>
    <li><a href="/download-app">Download App</a></li>
    <li><a href="https://bfccapital.com/prodigypro/" target={"_blank"}><span className="btn-show">Login</span> </a></li>
  </ul>
  
</Navbar.Collapse>
</Container>
</Navbar>

</>
);
}
export default Header;