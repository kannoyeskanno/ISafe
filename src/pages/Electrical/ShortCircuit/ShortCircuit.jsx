import React from 'react';
import shortCircuitImage from '../../../images/dam.png'; // Replace with actual image
import pdfShortCircuit from '../../../pdfs/Electrical/Short Circuit.pdf';
import '../../../root/Pdf_pages.scss';

const UnderstandingShortCircuits = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Understanding Short Circuits</h1>
      <img src={shortCircuitImage} alt="Short Circuit" className="main-image" />
    </div>

    <div className="content-section">
      <h2>Introduction</h2>
      <p>
        A short circuit occurs when an unintended path allows an electrical current to bypass the normal circuit. This surge of electricity can lead to overheating, fires, equipment damage, or even personal injury. Understanding short circuits is essential for electrical safety in both residential and commercial environments.
      </p>
    </div>

    <div className="content-section">
      <h2>What is a Short Circuit?</h2>
      <p>
        In a short circuit, electricity flows along an unintended, low-resistance path, bypassing the normal load, like a light bulb or appliance. This causes a rapid increase in current, generating excess heat that can spark fires or damage equipment.
      </p>
      <ul>
        <li><strong>Wire Insulation Failure:</strong> Exposed wires can lead to accidental contact between live wires.</li>
        <li><strong>Faulty Wiring:</strong> Incorrectly installed or deteriorating wiring can increase risk.</li>
        <li><strong>Loose Connections:</strong> Poorly connected wires can cause unintended electricity flow.</li>
        <li><strong>Water Exposure:</strong> Water conducts electricity, creating risks when in contact with live wires.</li>
        <li><strong>Overloaded Circuits:</strong> Strained wiring increases the risk of overheating and short circuits.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Types of Short Circuits</h2>
      <div className="cause">
        <h3>1. Direct Short Circuit</h3>
        <p>A direct short occurs when two live contacts (positive and negative) touch, allowing unrestricted current flow. This can cause immediate damage or trigger breakers.</p>
      </div>
      <div className="cause">
        <h3>2. Ground Fault</h3>
        <p>Occurs when an active wire touches a grounded surface, often due to water intrusion or damaged insulation.</p>
      </div>
      <div className="cause">
        <h3>3. Arc Fault</h3>
        <p>Arc faults are sparks that jump between damaged wires, more common in older electrical systems, and can lead to fires.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>Consequences of a Short Circuit</h2>
      <ul>
        <li><strong>Fire Hazard:</strong> Short circuits are a major cause of electrical fires.</li>
        <li><strong>Component Damage:</strong> Surges of electricity can damage electronics and appliances.</li>
        <li><strong>Power Outages:</strong> Can trip breakers or blow fuses, causing local outages.</li>
        <li><strong>Electrical Shock:</strong> Increases risk of burns or injury from electric shock.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Responding to a Short Circuit</h2>
      <ol>
        <li>Turn Off Power: Immediately switch off the power supply to prevent damage.</li>
        <li>Identify the Source: Check for overloaded outlets, damaged appliances, or compromised circuits.</li>
        <li>Inspect Breakers: A tripped breaker may indicate deeper issues needing professional attention.</li>
        <li>Seek Professional Help: Consult an electrician for repeated or unresolved issues.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>Preventing Short Circuits</h2>
      <ul>
        <li>Regular Inspections: Check wiring and components for wear, especially in older buildings.</li>
        <li>Use Circuit Breakers: Modern breakers and fuses can stop excessive currents to prevent fires.</li>
        <li>Avoid Overloading Outlets: Don’t plug too many devices into one outlet or power strip.</li>
        <li>Keep Systems Dry: Avoid placing electrical appliances near water sources.</li>
        <li>Replace Damaged Cords: Don’t use appliances with exposed or frayed wiring.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Conclusion</h2>
      <p>
        Short circuits are a serious electrical hazard, with risks of fire, injury, and property damage. Understanding causes and prevention methods can help create safer environments and reduce the risk of electrical accidents.
      </p>
    </div>

    <div className="download-section">
      <a href={pdfShortCircuit} download="Understanding_Short_Circuits.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default UnderstandingShortCircuits;
