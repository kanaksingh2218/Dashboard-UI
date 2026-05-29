
import './Hero.css';
import Button from '../ui/Button';

import womanImg from '../../assets/woman.jpg';
import cardImg from '../../assets/card.png';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-inner">

        <div className="hero-content">
          <div className="hero-text-block">
            <h1 className="hero-headline">
              The new foundation of modern banking
            </h1>
            <p className="hero-subtext">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
          </div>

          <div className="hero-cta-group">
            <Button variant="primary">Request Demo</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </div>

                <div className="hero-trusted">
          <span className="trusted-label">Trusted by:</span>
          
          <div className="trusted-logos">
            
            <div className="trusted-logo-item">
              <img src="/src/assets/shells.png" alt="Shells" className="logo-icon-img" />
              <span className="logo-text">SHELLS</span>
            </div>
            
            <div className="trusted-logo-item">
              <img src="/src/assets/smartfinder.png" alt="SmartFinder" className="logo-icon-img" />
              <span className="logo-text">SmartFinder</span>
            </div>
            
            <div className="trusted-logo-item">
              <img src="/src/assets/zoomerr.png" alt="Zoomerr" className="logo-icon-img" />
              <span className="logo-text">Zoomerr</span>
            </div>
            
            <div className="trusted-logo-item">
              <img src="/src/assets/artvenue.png" alt="ArtVenue" className="logo-icon-img" />
              <span className="logo-text">ArtVenue</span>
            </div>
            
            <div className="trusted-logo-item">
              <img src="/src/assets/kontrasti.png" alt="Kontrastr" className="logo-icon-img" />
              <span className="logo-text">Kontrastr</span>
            </div>
            
            <div className="trusted-logo-item">
              <img src="/src/assets/waves.png" alt="Kontrastr" className="logo-icon-img" />
              <span className="logo-text waves">WAVESMARATHON</span>
            </div>

          </div>
        </div>

        <div className="hero-visuals">
          <div className="hero-visuals-inner">
            <div className="hero-glow"></div>
            
            <img src={womanImg} alt="Woman using banking app" className="visual-img main-img" />
            <img src={cardImg} alt="Dashboard balance card" className="visual-img card-img" />
            
            <div className="recent-activity-card">
              <h3 className="ra-title">Recent activity</h3>
              <div className="ra-tabs">
                <span className="ra-tab">This Day</span>
                <span className="ra-tab active">This Week</span>
                <span className="ra-tab">This Month</span>
                <span className="ra-tab">6 Month</span>
              </div>
              <div className="ra-divider"></div>
              <div className="ra-transaction">
                <div className="ra-icon">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ra-details">
                  <span className="ra-name">To Jin <span className="ra-work">· Work</span></span>
                  <span className="ra-date">12 jun 2022</span>
                </div>
                <div className="ra-amount">-$59</div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
