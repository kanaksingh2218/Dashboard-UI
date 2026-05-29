
import './index.css';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import CloudBanking from './components/sections/CloudBanking';
import CoreBanking from './components/sections/CoreBanking';
import Advantage from './components/sections/Advantage';
import Marquee from './components/sections/Marquee';
import DigitalBanking from './components/sections/DigitalBanking';
import Insights from './components/sections/Insights';
import CaseStudies from './components/sections/CaseStudies';
import ActionBanner from './components/sections/ActionBanner';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Solutions />
      <CloudBanking/>
      <CoreBanking/>
      <Advantage/>
      <Marquee/>
      <DigitalBanking/>
      <Insights/>
      <CaseStudies/>
      <ActionBanner/>
      <Footer/>
    </div>
  );
}

export default App;
