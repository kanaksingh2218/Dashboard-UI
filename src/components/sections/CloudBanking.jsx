
import './CloudBanking.css';
import Button from '../ui/Button';
import LearnMoreLink from '../ui/LearnMoreLink';

const CloudBanking = () => {
  return (
    <section className="cloud-section">
         <div className="cloud-bg-text">CB7</div>
      <div className="cloud-inner">
        
        <div className="cloud-content">
          <div className="cloud-text-group">
            <h2 className="cloud-headline">
              A complete cloud-based core banking.
            </h2>
            <p className="cloud-subtext">
              Faster time to market with our cloud-based core banking services
            </p>
          </div>
          <Button variant="primary">REQUEST DEMO</Button>
          <LearnMoreLink />
        </div>

        <div className="cloud-visuals">
          <div className="cloud-image-wrapper">
            <img 
              src="/src/assets/cloud-dashboard.png" 
              alt="Cloud Dashboard" 
              className="cloud-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudBanking;
