import './DigitalBanking.css';
import Button from '../ui/Button';
import LearnMoreLink from '../ui/LearnMoreLink';

const CheckItem = ({ text }) => (
  <li className="feature-list-item">
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18.5" height="18.5" rx="4" fill="url(#check-grad)"/>
      <path d="M5 9.5L8 12.5L14 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="check-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4FD" />
          <stop offset="100%" stopColor="#003ACE" />
        </linearGradient>
      </defs>
    </svg>
    {text}
  </li>
);

const DigitalBanking = () => {

  return (
    <section className="digital-section">
      
      <div className="glow-orange-top"></div>
      <div className="glow-orange-right"></div>
      <div className="glow-blue-bottom"></div>
      
      <div className="bg-text-n7">
        <svg viewBox="0 0 744 687" width="100%" height="100%">
          <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="572" fill="none" stroke="url(#dec-grad)" strokeWidth="2" opacity="0.5">N7</text>
        </svg>
      </div>

      <div className="bg-text-7">
        <svg viewBox="0 0 861 1829" width="100%" height="100%">
          <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="1524" fill="none" stroke="url(#dec-grad)" strokeWidth="2" opacity="0.2">7</text>
        </svg>
      </div>
      
      <svg className="shared-gradient-defs">
        <defs>
          <linearGradient id="dec-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4FD" />
            <stop offset="100%" stopColor="#003ACE" />
          </linearGradient>
        </defs>
      </svg>

      <div className="digital-inner">
        
        <div className="digital-content">
          <h2 className="digital-headline">
            Digital banking out-of-the-box
          </h2>
          <p className="digital-subtext">
            N7 helps your financial institution improve the client experience, automate and optimize procedures
          </p>
          
          <div className="digital-actions">
            <Button variant="primary">REQUEST DEMO</Button>
            <LearnMoreLink />
          </div>
        </div>

        <div className="digital-features">
          
          {/* Feature 1 */}
          <div className="feature-row">
            <div className="feature-phone">
              <img src="/src/assets/iphone-frame.png" className="phone-frame" alt="Frame" />
              <img src="/src/assets/screen-1.png" className="phone-screen" alt="Dashboard" />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">Fully compliant with regulatory requirement</h3>
              <p className="feature-subtext">The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures.</p>
              <ul className="feature-list">
                <CheckItem text="Pre-integrated Security System" />
                <CheckItem text="Fully Compliant With Regulatory Requirement" />
                <CheckItem text="Digitally Connected Core" />
              </ul>
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-text">
              <h3 className="feature-title">No legacy IT systems</h3>
              <p className="feature-subtext">Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.</p>
              <ul className="feature-list">
                <CheckItem text="Adaptive & Intelligent API monetization" />
                <CheckItem text="Ambient User Experience" />
                <CheckItem text="Cloud-native With lower TCO" />
              </ul>
            </div>
            <div className="feature-phone">
              <img src="/src/assets/iphone-frame.png" className="phone-frame" alt="Frame" />
              <img src="/src/assets/screen-2.png" className="phone-screen" alt="Stats" />
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-phone">
              <img src="/src/assets/iphone-frame.png" className="phone-frame" alt="Frame" />
              <img src="/src/assets/screen-3.png" className="phone-screen" alt="Settings" />
            </div>
            <div className="feature-text">
              <h3 className="feature-title">No traditional branches</h3>
              <p className="feature-subtext">Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.</p>
              <ul className="feature-list">
                <CheckItem text="Branchless & Paperless Banking" />
                <CheckItem text="Digital Transformation Capability" />
                <CheckItem text="Optimized, Adoptable and Scalable" />
              </ul>
            </div>
          </div>

        </div>
      </div>
        <div className="digital-cta-wrapper">
          <div className="digital-cta-card">
            
            <div className="digital-cta-bg-svg">
              <svg viewBox="0 0 744 687" width="100%" height="100%">
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="572" fontFamily="Archivo, sans-serif" fontWeight="500" fill="none" stroke="url(#dec-grad)" strokeWidth="2" opacity="0.5">N7</text>
              </svg>
            </div>

            <div className="digital-cta-text-group" style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="digital-cta-headline">
                Take the full advantage of going paper-less now.
              </h2>
              <p className="digital-cta-subtext">
                N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations 
              </p>
            </div>
            
            <div className="digital-cta-btn-group" style={{ position: 'relative', zIndex: 1 }}>
              <Button variant="outline">Contact Us</Button>
              <Button variant="primary">REQUEST DEMO</Button>
            </div>
            
          </div>
        </div>
        {/* ============================================== */}
    </section>
  );
};

export default DigitalBanking;