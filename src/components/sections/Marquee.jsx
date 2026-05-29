import './Marquee.css';

const MarqueeBlock = () => (
  <div className="marquee-content">
    <span className="marquee-text-gradient">N7</span>
    
    <div className="marquee-icon">
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 5L29 53M5 29L53 29M12 12L46 46M12 46L46 12" stroke="#000D12" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>

    <span className="marquee-text-dark">Say</span>
    <span className="marquee-wave">👋</span>
    <span className="marquee-text-dark">to the new way of banking</span>
    
    <div className="marquee-icon">
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 5L29 53M5 29L53 29M12 12L46 46M12 46L46 12" stroke="#000D12" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>

    <span className="marquee-text-gradient">CB7</span>
    
    <div className="marquee-icon">
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 5L29 53M5 29L53 29M12 12L46 46M12 46L46 12" stroke="#000D12" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
    
    <span className="marquee-text-dark">Say</span>
  </div>
);

const Marquee = () => {

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        <MarqueeBlock />
        <MarqueeBlock />
        <MarqueeBlock />
        <MarqueeBlock />
      </div>
    </section>
  );
};

export default Marquee;