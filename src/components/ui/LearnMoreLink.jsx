
import './LearnMoreLink.css';

const LearnMoreLink = ({ href = '#learn-more', children = 'LEARN MORE', className = '', ...props }) => {
  return (
    <a href={href} className={`learn-more-link ${className}`} {...props}>
      {children}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-more-icon">
        <path d="M0 6H11M6 1L11 6L6 11" stroke="#00B4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>              
    </a>
  );
};

export default LearnMoreLink;
