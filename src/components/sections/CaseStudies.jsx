
import './CaseStudies.css';

const CaseStudies = () => {
  return (
    <section className="case-studies-section">
      <h2 className="case-studies-title">Our Case Studies</h2>

      <div className="case-studies-carousel">
        
        <div className="carousel-card-bg-left">
          <div className="bg-card-img">
            <div className="bg-pattern-grid">
              <img src="/src/assets/insight-vector.png" alt="pattern" />
              <img src="/src/assets/insight-vector.png" alt="pattern" />
              <img src="/src/assets/insight-vector.png" alt="pattern" />
              <img src="/src/assets/insight-vector.png" alt="pattern" />
            </div>
          </div>
          <div className="bg-card-text">
            <p>Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation...</p>
          </div>
        </div>

        <div className="carousel-card-bg-right">
          <div className="bg-card-img"></div>
          <div className="bg-card-text">
             <p>Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation...</p>
          </div>
        </div>

        <div className="case-card-active">
          
          <div className="case-card-img">
            <div className="case-pattern-grid">
              <img src="/src/assets/insight-vector.png" className="case-vector" alt="vector" />
              <img src="/src/assets/insight-vector.png" className="case-vector" alt="vector" />
              <img src="/src/assets/insight-vector.png" className="case-vector" alt="vector" />
              <img src="/src/assets/insight-vector.png" className="case-vector" alt="vector" />
            </div>
          </div>
          
          <div className="case-card-text">
            <div className="case-tag">GETTING STARTED</div>
            <h3 className="case-headline">How we help brand reach out to more people</h3>
            
            <div className="case-meta">
              <div className="case-author-logo">
                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8L6 0V6H10L4 15V9H0L0 8Z" fill="#E9F4F9"/>
                </svg>
              </div>
              <span className="case-author-name">Zoomerr</span>
            </div>
            
            <button className="btn-case-read">READ MORE</button>
          </div>
          
        </div>
      </div>

      <div className="case-controls-container">
        
        <div className="case-arrows-dots">
          <div className="case-arrow">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="20" stroke="#00B4FD" strokeWidth="1.36" />
              <path d="M24 15L18 21L24 27" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Dots */}
          <div className="case-dots">
            <div className="case-dot"></div>
            <div className="case-dot active"></div>
            <div className="case-dot"></div>
            <div className="case-dot"></div>
          </div>
          
          <div className="case-arrow">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="20" stroke="#00B4FD" strokeWidth="1.36" />
              <path d="M18 15L24 21L18 27" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="view-all-link">
          <div className="view-text-wrapper">
            <span className="view-all-text">VIEW ALL</span>
            <div className="view-underline"></div> 
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H11M6 1L11 6L6 11" stroke="#00B4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>

    </section>
  );
};

export default CaseStudies;
