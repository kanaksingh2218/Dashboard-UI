
import './ActionBanner.css';

const ActionBanner = () => {
  return (
    <section className="action-banner-section">
      <div className="action-banner-inner">
        
        <div className="action-text-group">
          <h2 className="action-headline">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="action-subtext">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations 
          </p>
        </div>

        <div className="action-btn-group">
          <button className="btn-outline-action">Contact Us</button>
          <button className="btn-primary-action">REQUEST DEMO</button>
        </div>

      </div>
    </section>
  );
};

export default ActionBanner;
