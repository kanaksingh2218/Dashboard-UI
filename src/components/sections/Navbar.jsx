import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">N7</div>

      <button 
        className={`hamburger ${isOpen ? 'is-active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-container ${isOpen ? 'is-open' : ''}`}>
        <ul className="nav-links">
          <li>
            <a href="#solutions" onClick={() => setIsOpen(false)}>
              solutions <span className="dropdown-arrow"></span>
            </a>
          </li>
          <li>
            <a href="#resources" onClick={() => setIsOpen(false)}>
              resources <span className="dropdown-arrow"></span>
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>about us</a>
          </li>
        </ul>
        
        <div className="nav-actions">
          <button className="btn-action" onClick={() => setIsOpen(false)}>
            REQUEST DEMO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
