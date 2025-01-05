import React from 'react';
import electricalOverloadImage from '../../../images/dam.png'; 
import pdfElectricalOverload from '../../../pdfs/Electrical/Electrical Overloading.pdf';

import '../../../root/Pdf_pages.scss';

const ElectricalOverloading = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Understanding Electrical Overloading</h1>
      <img src={electricalOverloadImage} alt="Electrical Overloading" className="main-image" />
    </div>

    <div className="content-section">
      <h2>Introduction</h2>
      <p>
        Electrical overloading occurs when more electrical demand is placed on a circuit than it can safely handle, causing overheating, potential damage, and fire risks. Understanding its causes and prevention can help maintain safe systems.
      </p>
    </div>

    <div className="content-section">
      <h2>What is Electrical Overloading?</h2>
      <p>
        An electrical overload happens when devices draw more current than a circuit’s capacity. This excess heat can damage components, degrade insulation, and pose hazards.
      </p>
      <h3>Common causes of electrical overloading include:</h3>
      <ul>
        <li>High-wattage appliances like air conditioners or heaters being used simultaneously</li>
        <li>Plugging multiple devices into one outlet or power strip</li>
        <li>Outdated wiring in older buildings</li>
        <li>Temporary fixes, like extension cords, used as permanent solutions</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Types of Overloads</h2>
      <h3>1. Circuit Overload</h3>
      <p>
        Exceeding a circuit's capacity, often causing breaker trips; continuous overloading can degrade wiring.
      </p>
      <h3>2. Power Strip Overload</h3>
      <p>
        Using too many devices on one power strip can exceed its capacity, risking overheating.
      </p>
      <h3>3. Electrical Panel Overload</h3>
      <p>
        Overloading the main panel may cause breaker malfunctions, increasing fire risks.
      </p>
    </div>

    <div className="content-section">
      <h2>Effects and Risks of Electrical Overloading</h2>
      <ul>
        <li>Electrical Fires: Overloaded circuits are a primary cause of fires in homes and workplaces.</li>
        <li>Damage to Wiring and Devices: Persistent overloading can degrade wiring insulation.</li>
        <li>Tripped Breakers and Power Outages: Overloading often leads to tripped breakers.</li>
        <li>Shock Hazards: Damaged insulation due to overloading may expose live wires.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Recognizing Signs of Overloading</h2>
      <ul>
        <li>Frequent breaker trips</li>
        <li>Burning smells or scorch marks around outlets</li>
        <li>Dimming or flickering lights when other devices turn on</li>
        <li>Hot outlets or switches</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Responding to an Overload</h2>
      <ol>
        <li>Unplug devices when a breaker trips to reduce load.</li>
        <li>Inspect the electrical system for persistent issues.</li>
        <li>Distribute power usage across circuits.</li>
        <li>Consider circuit upgrades for high-power areas.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>Preventing Electrical Overloading</h2>
      <ul>
        <li>Use dedicated circuits for high-wattage appliances.</li>
        <li>Avoid excessive use of power strips and extension cords.</li>
        <li>Calculate total load requirements for circuits.</li>
        <li>Install additional circuits for high-demand areas.</li>
        <li>Schedule regular inspections, especially in older buildings.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfElectricalOverload} download="Electrical_Overload.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default ElectricalOverloading;
