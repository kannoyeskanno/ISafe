import React from 'react';
import chemicalSpillImage from '../../../images/dam.png'; 
import storageFailureImage from '../../../images/dam.png';
import healthImpactImage from '../../../images/dam.png'; 
import responseStepsImage from '../../../images/dam.png'; 
import pdfChemicalSpill from '../../../pdfs/ManMade/Chemical Spill.pdf';
import '../../../root/Pdf_pages.scss';

const ChemicalSpill = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Chemical Spills: A Comprehensive Guide</h1>
      <img src={chemicalSpillImage} alt="Chemical Spill" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. Introduction to Chemical Spills</h2>
      <p>
        Chemical spills involve the unintentional release of hazardous materials into the environment. These incidents can occur across various settings and pose significant risks to health, property, and ecosystems. Whether small or large, understanding how to prepare for, respond to, and prevent chemical spills is essential for safety.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of Chemical Spills</h2>
      <img src={storageFailureImage} alt="Storage Failure" className="section-image" />
      <ul>
        <li><strong>Storage Failures:</strong> Cracks, leaks, or structural failures in containers or tanks.</li>
        <li><strong>Transportation Accidents:</strong> Collisions or mishandling during transit.</li>
        <li><strong>Improper Handling:</strong> Incompatible containers or protocol neglect.</li>
        <li><strong>Natural Disasters:</strong> Flooding, earthquakes, or storms.</li>
        <li><strong>Uncontrolled Reactions:</strong> Violent reactions if mishandled.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>3. Health Impacts of Chemical Spill Exposure</h2>
      <img src={healthImpactImage} alt="Health Impact" className="section-image" />
      <p>
        Exposure to hazardous chemicals can result in immediate and long-term health consequences:
      </p>
      <ul>
        <li><strong>Acute Effects:</strong> Respiratory issues, eye irritation, skin burns, nausea.</li>
        <li><strong>Chronic Effects:</strong> Long-term damage to organs, neurological issues, or cancer.</li>
        <li><strong>Vulnerable Populations:</strong> Children, elderly individuals, and those with respiratory conditions are more at risk.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Chemical Spill Response: Immediate Action Steps</h2>
      <img src={responseStepsImage} alt="Response Steps" className="section-image" />
      <p>
        Effective response steps are crucial in minimizing risks:
      </p>
      <ul>
        <li><strong>Alert and Evacuate:</strong> Immediately inform others and evacuate the affected area.</li>
        <li><strong>Assess the Spill:</strong> Determine the type and quantity of the chemical and identify available containment resources.</li>
        <li><strong>Contain and Control:</strong> Use absorbents and barriers to limit the spill and block access to prevent environmental contamination.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfChemicalSpill} download="Chemical_Spill.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default ChemicalSpill;
