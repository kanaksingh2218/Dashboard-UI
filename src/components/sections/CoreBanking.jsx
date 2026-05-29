
import './CoreBanking.css';

const CoreBanking = () => {
  return (
    <section className="core-section">
      <div className="core-inner">
        
        <div className="core-visuals">
          <img 
            src="/assets/ckyc-dashboard.png" 
            alt="CKYC Dashboard" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div className="core-content">
          <h2 className="core-headline">
            Run a more efficient, flexible,and digitally connected corebanking system
          </h2>
          
          <div className="core-list-wrapper">
            <h3 className="core-list-title">What you will get:</h3>
            
            <div className="core-checklist">
              <div className="core-column col-1">
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">Customer-On Boarding</span>
                </div>
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">Managing deposits and withdrawals</span>
                </div>
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">Transaction management</span>
                </div>
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">Interest Calculation</span>
                </div>
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">Payments processing (cash, cheques, mandates, NEFT, RTGS etc)</span>
                </div>
              </div>

              <div className="core-column col-2">
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">CRM Activities</span>
                </div>
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">Configuring New Banking Products</span>
                </div>
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">Loan disbursal and Loan management</span>
                </div>
                <div className="check-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                    <rect width="14" height="14" rx="7" fill="#003ACE"/>
                    <path d="M4 7L6 9L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="check-text">Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreBanking;
