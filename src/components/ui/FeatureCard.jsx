
import './FeatureCard.css';
import LearnMoreLink from './LearnMoreLink';

const FeatureCard = ({ iconSrc, title, desc, tag, href = '#learn-more' }) => {
  return (
    <div className="feature-card">
      <div className="feature-header">
        <img src={iconSrc} alt="Icon" className="feature-icon" />
        {tag && <span className="feature-tag">{tag}</span>}
      </div>
      <div className="feature-text">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{desc}</p>
      </div>
      <LearnMoreLink href={href} />
    </div>
  );
};

export default FeatureCard;
