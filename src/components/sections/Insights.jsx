
import './Insights.css';

const NarrowCard = () => (
  <div className="insight-card-narrow">
    <div className="insight-tag">getting started</div>
    <h3 className="insight-card-title">How to transition from a traditional to a digital bank</h3>
    <div className="insight-card-meta">
      <span className="insight-author">David Grohl</span>
      <span className="insight-date">17/08/24</span>
    </div>
    <button className="btn-insight-read">READ MORE</button>
  </div>
);

const Insights = () => {

  return (
    <section className="insights-section">
      
      <div className="glow-blue-left"></div>

      <div className="insights-inner">
        
        <div className="insights-left">
          <h2 className="insights-headline">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button className="btn-outline-insights">INSIGHTS</button>
        </div>

        <div className="insights-right">
          
          <div className="insight-card-wide">
             <div className="insight-img-block">
              
              <div className="insight-pattern-grid">
                <img src="/src/assets/insight-vector.png" className="pattern-vector" alt="Decoration" />
                <img src="/src/assets/insight-vector.png" className="pattern-vector" alt="Decoration" />
                <img src="/src/assets/insight-vector.png" className="pattern-vector" alt="Decoration" />
                <img src="/src/assets/insight-vector.png" className="pattern-vector" alt="Decoration" />
              </div>
            </div>
            
            <div className="insight-text-block">
              <div className="insight-tag">getting started</div>
              <h3 className="insight-card-title">How to transition from a traditional to a digital bank</h3>
              <div className="insight-card-meta">
                <span className="insight-author">David Grohl</span>
                <span className="insight-date">17/08/24</span>
              </div>
              <button className="btn-insight-read">READ MORE</button>
            </div>
          </div>

          <div className="insight-cards-row">
            <NarrowCard />
            <NarrowCard />
          </div>

        </div>

        <div className="read-all-link">
          <span className="read-all-text">READ ALL INSIGHTS</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H11M6 1L11 6L6 11" stroke="#00B4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Insights;
