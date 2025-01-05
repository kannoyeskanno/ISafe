import React from 'react';
import shipFireImage from '../../../images/dam.png';
import engineRoomFireImage from '../../../images/dam.png';
import cargoFireImage from '../../../images/dam.png';
import pdfShipFire from '../../../pdfs/Fire/Ship Fire.pdf';
import '../../../root/Pdf_pages.scss';

const ShipFire = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Ship Fires: Prevention, Common Causes, and Response Strategies</h1>
      <img src={shipFireImage} alt="Ship Fire" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. What are Ship Fires?</h2>
      <p>
        Ship fires are fires that occur on vessels, often originating in engine rooms, cargo holds, or kitchen areas.
        These fires are extremely hazardous due to the difficulty of fighting fires at sea and the confined spaces aboard ships.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of Ship Fires</h2>
      <div className="cause">
        <h3>A. Engine Room Fires</h3>
        <img src={engineRoomFireImage} alt="Engine Room Fire" className="cause-image" />
        <p><strong>Definition:</strong> Fires in the engine room, often caused by fuel leaks, electrical malfunctions, or overheating engines.</p>
        <p><strong>Example:</strong> A fuel leak in the engine room ignites due to high engine temperature.</p>
        <p><strong>Prevention:</strong> Regular maintenance, leak checks, and proper ventilation in engine rooms.</p>
      </div>
      <div className="cause">
        <h3>B. Cargo Fires</h3>
        <img src={cargoFireImage} alt="Cargo Fire" className="cause-image" />
        <p><strong>Definition:</strong> Fires originating from hazardous materials, mispackaged cargo, or flammable goods.</p>
        <p><strong>Example:</strong> A chemical reaction from improperly stored cargo leads to a fire.</p>
        <p><strong>Prevention:</strong> Proper labeling, storage, and handling of cargo, as well as fire suppression systems in cargo holds.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>3. Prevention Measures for Ship Fires</h2>
      <ul>
        <li>Install Fire Suppression Systems: Use foam, CO2, or water-based systems in high-risk areas.</li>
        <li>Conduct Regular Fire Drills: Train the crew in fire response and evacuation procedures.</li>
        <li>Maintain Electrical Systems: Ensure wiring and equipment are up to code and regularly inspected.</li>
        <li>Keep Flammable Materials Away: Store hazardous materials safely and separate from heat sources.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Emergency Response to Ship Fires</h2>
      <ol>
        <li>Alert the Crew: Sound alarms and notify everyone aboard.</li>
        <li>Activate Fire Suppression Systems: Use the ship's fire suppression system to contain the fire if safe to do so.</li>
        <li>Evacuate to Lifeboats if Necessary: If the fire is uncontrollable, abandon ship following evacuation protocols.</li>
        <li>Call for Assistance: Contact nearby vessels or the coast guard for emergency support.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>5. Key Takeaways</h2>
      <ul>
        <li>Ship fires are commonly caused by engine room malfunctions, cargo mishandling, and electrical issues.</li>
        <li>Prevention strategies include regular inspections, proper storage of hazardous materials, and fire safety training.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfShipFire} download="Ship_Fires.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default ShipFire;
