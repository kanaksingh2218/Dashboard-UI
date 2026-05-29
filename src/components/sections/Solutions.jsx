
import './Solutions.css';
import Button from '../ui/Button';
import FeatureCard from '../ui/FeatureCard';

const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-inner">
        
        <div className="solutions-content">
          <h2 className="solutions-headline">
            All of our solutions are tailor-made to your needs
          </h2>
          <Button variant="outline" className="solutions-btn-custom">REQUEST DEMO</Button>
        </div>

        <div className="solutions-features">
          
          <FeatureCard 
            iconsrc="/assets/cb7-icon.png"
            title="Core Banking CB7"
            desc="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance."
          />

          <FeatureCard 
            iconsrc="/assets/icon-2.png"
            title="Digital Banking N7"
            desc="N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients"
          />

          <FeatureCard 
            iconsrc="/assets/icon-3.png"
            title="Open Banking"
            desc="Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring."
          />

          <FeatureCard 
            iconsrc="/assets/nbfc-icon.png"
            title="Loan Origination System"
            desc="N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients"
            tag="NBFC"
          />

          <FeatureCard 
            iconsrc="/assets/nbfc-icon-2.png"
            title="Loan Management System"
            desc="N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients"
            tag="NBFC"
          />

        </div>

      </div>
    </section>
  );
};

export default Solutions;
