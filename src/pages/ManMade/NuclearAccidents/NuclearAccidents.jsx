import React from 'react';
import nuclearAccidentMain from '../../../images/dam.png'; 
import humanErrorImage from '../../../images/dam.png'; 
import reactorMeltdownImage from '../../../images/dam.png'; 
import healthImpactImage from '../../../images/dam.png'; 
import environmentImpactImage from '../../../images/dam.png'; 
import safetyMeasuresImage from '../../../images/dam.png'; 
import caseStudiesImage from '../../../images/dam.png'; 
import pdfNuclearAccidents from '../../../pdfs/ManMade/Nuclear Accidents.pdf';
import '../../../root/Pdf_pages.scss';

const NuclearAccidents = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Nuclear Accidents: Understanding Causes, Impacts, and Safety Measures</h1>
      <img src={nuclearAccidentMain} alt="Nuclear Accident" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. Introduction to Nuclear Accidents</h2>
      <p>
        Nuclear accidents involve the release of nuclear energy or radioactive material, often due to equipment failures, human error, or natural disasters. High-profile incidents, like Chernobyl and Fukushima, highlight the risks of nuclear power.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of Nuclear Accidents</h2>
      <img src={humanErrorImage} alt="Human Error" className="section-image" />
      <ul>
        <li><strong>Human Error:</strong> Mistakes in operation or maintenance can lead to system malfunctions.</li>
        <li><strong>Equipment Failures:</strong> Malfunctions in reactors or containment units can release radioactive material.</li>
        <li><strong>Natural Disasters:</strong> Earthquakes, tsunamis, and severe storms can damage nuclear facilities.</li>
        <li><strong>Design Flaws:</strong> Some reactors may have inherent vulnerabilities.</li>
        <li><strong>Operational Lapses:</strong> Inadequate response to warning signs contributes to accidents.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>3. Types of Nuclear Accidents</h2>
      <img src={reactorMeltdownImage} alt="Reactor Meltdown" className="section-image" />
      <ul>
        <li><strong>Reactor Meltdown:</strong> Core overheating can lead to radioactive release.</li>
        <li><strong>Radiation Leakage:</strong> Leakages occur due to structural failures or operational errors.</li>
        <li><strong>Criticality Accidents:</strong> Uncontrolled chain reactions release radiation.</li>
        <li><strong>Nuclear Waste Accidents:</strong> Mishandling of waste causes contamination.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Health Impacts of Nuclear Accidents</h2>
      <img src={healthImpactImage} alt="Health Impact" className="section-image" />
      <p>
        Nuclear radiation exposure has both immediate and long-term health consequences.
      </p>
      <ul>
        <li><strong>Acute Radiation Syndrome:</strong> Severe exposure leads to nausea, burns, and death.</li>
        <li><strong>Cancer Risks:</strong> Higher likelihood of cancers, especially thyroid and leukemia.</li>
        <li><strong>Genetic Mutations:</strong> Long-term exposure can cause genetic disorders.</li>
        <li><strong>Psychological Effects:</strong> Anxiety, PTSD, and other issues are common.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>5. Environmental Impact of Nuclear Accidents</h2>
      <img src={environmentImpactImage} alt="Environmental Impact" className="section-image" />
      <ul>
        <li><strong>Soil and Water Contamination:</strong> Radioactive isotopes affect agriculture and water.</li>
        <li><strong>Biodiversity Loss:</strong> Radiation harms plant and animal life, leading to mutations.</li>
        <li><strong>Long-term Land Unusability:</strong> Contaminated areas may be unsafe for decades.</li>
        <li><strong>Atmospheric Pollution:</strong> Radioactive particles spread over large areas.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>6. Nuclear Accident Safety Measures</h2>
      <img src={safetyMeasuresImage} alt="Safety Measures" className="section-image" />
      <p><strong>A. Prevention and Preparedness</strong></p>
      <ul>
        <li>Regular safety drills and protocol adherence.</li>
        <li>Routine equipment checks and maintenance.</li>
      </ul>
      <p><strong>B. Response to Nuclear Incidents</strong></p>
      <ul>
        <li>Evacuating personnel and residents.</li>
        <li>Activating containment systems.</li>
        <li>Using monitoring equipment to assess exposure.</li>
      </ul>
      <p><strong>C. Mitigation Strategies</strong></p>
      <ul>
        <li>Cooling down reactors with water or sand.</li>
        <li>Building enclosures around damaged reactors.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>8. Case Studies: Major Nuclear Accidents</h2>
      <img src={caseStudiesImage} alt="Case Studies" className="section-image" />
      <p><strong>1. Chernobyl Disaster (1986, Ukraine):</strong> A reactor meltdown caused widespread contamination.</p>
      <p><strong>2. Fukushima Daiichi Disaster (2011, Japan):</strong> An earthquake and tsunami led to reactor failures.</p>
      <p><strong>3. Three Mile Island Accident (1979, USA):</strong> Partial meltdown with minor radioactive releases.</p>
      <p><strong>4. Kyshtym Disaster (1957, Russia):</strong> A storage tank explosion led to extensive contamination.</p>
    </div>

    <div className="download-section">
      <a href={pdfNuclearAccidents} download="Nuclear_Accidents.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default NuclearAccidents;
