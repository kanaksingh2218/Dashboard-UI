
import './Advantage.css';
import Button from '../ui/Button';

const Advantage = () => {
  return (
    <section className="advantage-section">
      <div className="advantage-inner">
        
        <div className="advantage-bg-text">
          <img 
            src="/src/assets/CB7.png" 
            alt="CB7 Background Watermark" 
          />
        </div>

        <div className="advantage-card">
          
          <div className="advantage-text-group">
            <h2 className="advantage-headline">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="advantage-subtext">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations 
            </p>
          </div>

          <div className="advantage-btn-group">
            <Button variant="outline">Contact Us</Button>
            <Button variant="primary">REQUEST DEMO</Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advantage;
