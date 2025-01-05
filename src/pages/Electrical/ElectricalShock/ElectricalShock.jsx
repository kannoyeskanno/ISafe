import React from 'react';
import electricalShockImage from '../../../images/dam.png';
import liveWireImage from '../../../images/dam.png';
import faultyEquipmentImage from '../../../images/dam.png';
import wetConditionsImage from '../../../images/dam.png';
import electricalShockPDF from '../../../pdfs/Electrical/Electrical Shock.pdf';
import '../../../root/Pdf_pages.scss';

const ElectricalShock = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Understanding Electrical Shock: Causes, Types, and Safety Measures</h1>
      <img src={electricalShockImage} alt="Electrical Shock" className="main-image" />
    </div>

    <div className="content-section">
      <h2>Introduction</h2>
      <p>
        Electrical shock occurs when a person comes into contact with an electrical energy source, causing current flow through their body. This can lead to injuries ranging from mild discomfort to severe tissue damage or even death. Understanding the causes, types, and responses to electrical shocks is essential for safety.
      </p>
    </div>

    <div className="content-section">
      <h2>Causes of Electrical Shock</h2>
      <div className="cause">
        <h3>1. Direct Contact with Live Wires</h3>
        <img src={liveWireImage} alt="Live Wire" className="cause-image" />
        <p><strong>Description:</strong> Accidental contact with an exposed, live wire in workplaces or homes.</p>
      </div>
      <div className="cause">
        <h3>2. Faulty or Poorly Maintained Equipment</h3>
        <img src={faultyEquipmentImage} alt="Faulty Equipment" className="cause-image" />
        <p><strong>Description:</strong> Damaged wiring or broken insulation can lead to shocks when touched.</p>
      </div>
      <div className="cause">
        <h3>3. Improper Use of Electrical Devices</h3>
        <img src={wetConditionsImage} alt="Wet Conditions" className="cause-image" />
        <p><strong>Description:</strong> Using devices near water increases shock risk due to water's conductivity.</p>
      </div>
      <div className="cause">
        <h3>4. Inadequate Safety Measures</h3>
        <p><strong>Description:</strong> Ignoring safety protocols can lead to accidental live contact.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>Types of Electrical Shock</h2>
      <ul>
        <li><strong>Minor Shock:</strong> Causes tingling or mild pain from low-voltage sources.</li>
        <li><strong>Severe Shock:</strong> High-voltage sources can lead to burns or cardiac arrest.</li>
        <li><strong>Electric Burn:</strong> Heat damage from current passing through body tissues.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Effects of Electrical Shock</h2>
      <ul>
        <li><strong>Muscle Spasms:</strong> Involuntary contractions leading to injuries.</li>
        <li><strong>Nerve Damage:</strong> Severe shocks can impair sensation or movement.</li>
        <li><strong>Cardiac Arrest:</strong> High currents can disrupt heart rhythms.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>First Aid and Emergency Response</h2>
      <ol>
        <li>Avoid Direct Contact: Use an insulated material to remove the victim from the source.</li>
        <li>Disconnect Power: Turn off the power source if possible.</li>
        <li>Call Emergency Services: For serious shocks, seek medical help immediately.</li>
        <li>Administer CPR if Needed: Use CPR if the victim is not breathing.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>Preventing Electrical Shock</h2>
      <ul>
        <li>Regular Maintenance: Inspect wiring and replace damaged cords.</li>
        <li>Proper Insulation: Cover wires and outlets to prevent accidental contact.</li>
        <li>Use GFCIs: Install GFCIs in wet areas to cut off power when faults are detected.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={electricalShockPDF} download="Understanding_Electrical_Shock.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default ElectricalShock;
