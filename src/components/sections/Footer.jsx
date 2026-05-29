import './Footer.css';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6H11M6 1L11 6L6 11" stroke="#00B4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-glow-bottom"></div>

      <div className="footer-inner">
        
        <div className="footer-brand">
          <h1 className="footer-logo-text">N7</h1>
        </div>

        <div className="footer-right-content">
          
          <div className="footer-grid">
            
            <div className="footer-col col-1">
              <div className="address-block">
                <h4 className="footer-heading">London</h4>
                <p className="footer-text">Linktia Infosystems Ltd – CB7,<br/>26 Main Road Sundridge,TN14 6EP, England, United Kingdom.</p>
              </div>
              <div className="links-block">
                <h4 className="footer-heading">Solutions</h4>
                <ul className="footer-links">
                  <li><a href="#">Core Banking CB7</a> <ArrowIcon /></li>
                  <li><a href="#">Digital Banking N7</a> <ArrowIcon /></li>
                  <li><a href="#">Open Banking</a> <ArrowIcon /></li>
                  <li><a href="#">Loan Origination System</a> <ArrowIcon /></li>
                  <li><a href="#">Loan Management System</a> <ArrowIcon /></li>
                  <li><a href="#">Digital Transformation</a> <ArrowIcon /></li>
                </ul>
              </div>
            </div>

            <div className="footer-col col-2">
              <div className="address-block">
                <h4 className="footer-heading">Dubai</h4>
                <p className="footer-text">Linktia Infosystems Ltd – CB7,<br/>Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates</p>
              </div>
              <div className="links-block">
                <h4 className="footer-heading">N7 Banking</h4>
                <ul className="footer-links">
                  <li><a href="#">About Us</a> <ArrowIcon /></li>
                  <li><a href="#">Solutions</a> <ArrowIcon /></li>
                  <li><a href="#">Contact</a> <ArrowIcon /></li>
                  <li><a href="#">Company</a> <ArrowIcon /></li>
                  <li><a href="#">Careers</a> <ArrowIcon /></li>
                  <li><a href="#">Insights</a> <ArrowIcon /></li>
                  <li><a href="#">Core Team</a> <ArrowIcon /></li>
                  <li><a href="#">Brand Center</a> <ArrowIcon /></li>
                </ul>
              </div>
            </div>

            <div className="footer-col col-3">
              <div className="address-block">
                <h4 className="footer-heading">London</h4>
                <p className="footer-text">Linktia Infosystems Ltd – CB7,<br/>Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India</p>
              </div>
              <div className="links-block">
                <h4 className="footer-heading">Our Socials</h4>
                <ul className="footer-links">
                  <li><a href="#">LinkedIn</a> <ArrowIcon /></li>
                  <li><a href="#">X</a> <ArrowIcon /></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="footer-copyright">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;