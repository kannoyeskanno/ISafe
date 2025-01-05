import React from 'react';
import industrialFireImage from '../../../images/industrial.png'; 
import causeImage1 from '../../../images/dam.png'; 

import pdf1 from '../../../pdfs/Fire/Industrial Fire.pdf';
import '../../../root/Pdf_pages.scss';

const IndustrialFire = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Industrial Fires: Risks, Causes, Prevention, and Emergency Response</h1>
      <img src={industrialFireImage} alt="Industrial Fire" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. What are Industrial Fires?</h2>
      <p>
        Industrial fires occur in workplaces like factories, warehouses, and production facilities. These environments involve chemicals, large machinery, and high-power equipment, presenting unique fire risks and requiring specialized safety measures.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of Industrial Fires</h2>
      <div className="cause">
        <h3>A. Combustible Dust</h3>
        <p><strong>Definition:</strong> Tiny, flammable particles from materials like wood, metals, or chemicals.</p>
        <p><strong>Example:</strong> Woodworking and metal fabrication create dust that can ignite in the air.</p>
        <p><strong>Prevention:</strong> Use dust control systems, regularly clean surfaces, and avoid dust build-up.</p>
      </div>
      <div className="cause">
        <h3>B. Flammable Liquids and Gases</h3>
        <p><strong>Definition:</strong> Substances like fuels, solvents, and other chemicals that can easily ignite.</p>
        <p><strong>Example:</strong> A small leak of propane gas near heat sources can lead to explosions.</p>
        <p><strong>Prevention:</strong> Store chemicals in approved containers, follow proper handling guidelines, and check for leaks.</p>
      </div>
      <div className="cause">
        <h3>C. Equipment and Machinery Malfunctions</h3>
        <p><strong>Definition:</strong> Fires caused by overheated or faulty equipment.</p>
        <p><strong>Example:</strong> A machine with inadequate cooling overheats, causing nearby materials to ignite.</p>
        <p><strong>Prevention:</strong> Schedule regular maintenance, check cooling systems, and replace faulty parts promptly.</p>
      </div>
      
      <div className="image-container">
        <div className="image-item">
          <img src={causeImage1} alt="Combustible Dust" />
          <p>Combustible Dust</p>
        </div>
        <div className="image-item">
          <img src={causeImage1} alt="Flammable Liquids and Gases" />
          <p>Flammable Liquids and Gases</p>
        </div>
        <div className="image-item">
          <img src={causeImage1} alt="Machinery Malfunctions" />
          <p>Equipment Malfunctions</p>
        </div>
      </div>
    </div>

    <div className="content-section">
      <h2>3. Fire Prevention Measures for Industrial Settings</h2>
      <ul>
        <li>Routine Inspections: Regularly check equipment, electrical systems, and storage areas for fire hazards.</li>
        <li>Employee Safety Training: Provide fire safety training on handling chemicals, using fire extinguishers, and evacuation plans.</li>
        <li>Safety Equipment Installation: Install fire alarms, sprinklers, and fire extinguishers designed for industrial fires.</li>
        <li>Clear Evacuation Routes: Ensure pathways are free of obstacles, and exits are accessible.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Emergency Response Plan for Industrial Fires</h2>
      <ol>
        <li>Immediate Evacuation: Follow the company’s evacuation plan and proceed to assembly points.</li>
        <li>Shut Down Power and Equipment (If Safe): Turn off machinery and gas supplies if safe to do so.</li>
        <li>Use Appropriate Fire Extinguishers: Use only if trained and the fire is manageable.</li>
        <li>Call Emergency Services: Report the fire and follow instructions from emergency responders.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>5. Key Takeaways</h2>
      <ul>
        <li>Industrial fires have specific risks like combustible dust and flammable chemicals.</li>
        <li>Preventive measures include regular inspections, employee training, and equipment maintenance.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdf1} download="Industrial_Fires.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default IndustrialFire;
