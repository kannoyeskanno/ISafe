import React from 'react';
import faultyWiringImage from '../../../images/dam.png'; 
import pdfFaultyWiring from '../../../pdfs/Electrical/Faulty Wiring.pdf';
import '../../../root/Pdf_pages.scss';

const FaultyWiring = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Understanding Faulty Wiring</h1>
      <img src={faultyWiringImage} alt="Faulty Wiring" className="main-image" />
    </div>

    <div className="content-section">
      <h2>Introduction</h2>
      <p>
        Faulty wiring is a major cause of electrical hazards, such as fires, shocks, and damage to property. It can result from improper installation, wear, or aging. Knowing the risks and signs can help prevent these dangers.
      </p>
    </div>

    <div className="content-section">
      <h2>What is Faulty Wiring?</h2>
      <p>
        Faulty wiring refers to any issues or defects in an electrical system’s wiring that may lead to power outages, shocks, or even fires. Causes include age, moisture, physical damage, and overloaded circuits.
      </p>
      <ul>
        <li><strong>Aging Systems:</strong> Older wiring may lack modern insulation, making it prone to overheating.</li>
        <li><strong>Improper Installation:</strong> Incorrect or rushed electrical work can lead to safety hazards.</li>
        <li><strong>Physical Damage:</strong> Wiring can be damaged by rodents, construction, or general wear.</li>
        <li><strong>Moisture Exposure:</strong> Corrosion can occur in wet environments, damaging wiring.</li>
        <li><strong>Overloading Circuits:</strong> Exceeding circuit capacity can overheat wiring.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Dangers Associated with Faulty Wiring</h2>
      <ul>
        <li><strong>Electrical Fires:</strong> Faulty wiring is a leading cause of house fires due to sparking wires.</li>
        <li><strong>Electric Shocks:</strong> Exposed wires increase the risk of shock.</li>
        <li><strong>Short Circuits:</strong> Faulty connections can create dangerous short circuits.</li>
        <li><strong>Device Damage:</strong> Power surges can reduce the lifespan of electronics.</li>
        <li><strong>Power Interruptions:</strong> Frequent breaker trips indicate wiring issues.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Common Signs of Faulty Wiring</h2>
      <ul>
        <li>Flickering or Dimming Lights</li>
        <li>Buzzing or Crackling Sounds</li>
        <li>Burning Smell</li>
        <li>Warm or Discolored Outlets</li>
        <li>Tripped Circuit Breakers</li>
        <li>Shocks or Sparks</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Preventing Faulty Wiring Issues</h2>
      <ul>
        <li>Hire Qualified Electricians</li>
        <li>Regular Inspections</li>
        <li>Avoid DIY Electrical Work</li>
        <li>Keep Wiring Clear of Water</li>
        <li>Install Proper Circuit Protection</li>
        <li>Replace Worn or Frayed Wires</li>
        <li>Use Quality Electrical Components</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>What to Do if You Suspect Faulty Wiring</h2>
      <ol>
        <li>Turn Off Power: Immediately switch off the power and unplug affected devices.</li>
        <li>Contact a Professional: Have a certified electrician assess and fix the issue.</li>
        <li>Do Not Ignore Warning Signs: Address issues like flickering lights or warm outlets promptly.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>Case Study: The Dangers of Ignoring Faulty Wiring</h2>
      <p>
        In 2022, an apartment fire caused by faulty wiring highlighted the dangers of ignoring early warning signs, like flickering lights and warm outlets.
      </p>
    </div>

    <div className="content-section">
      <h2>Conclusion</h2>
      <p>
        Faulty wiring is a significant hazard, but understanding its causes, signs, and prevention methods can help reduce risks.
      </p>
    </div>

    <div className="download-section">
      <a href={pdfFaultyWiring} download="Understanding_Faulty_Wiring.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default FaultyWiring;
