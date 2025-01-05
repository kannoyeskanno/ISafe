import React from 'react';
import industrialExplosionMain from '../../../images/dam.png';
import dustExplosionImage from '../../../images/dam.png';
import gasLeakImage from '../../../images/dam.png';
import economicImpactImage from '../../../images/dam.png';
import safetyMeasuresImage from '../../../images/dam.png';
import caseStudiesImage from '../../../images/dam.png';
import pdfIndustrialExplosions from '../../../pdfs/ManMade/Industrial Explosions.pdf';
import '../../../root/Pdf_pages.scss';

const IndustrialExplosions = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Industrial Explosions: Causes, Impact, and Safety Measures</h1>
      <img src={industrialExplosionMain} alt="Industrial Explosion" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. Understanding Industrial Explosions</h2>
      <p>
        Industrial explosions are devastating incidents that can result in loss of life, environmental damage, and financial repercussions. These explosions are common in factories, plants, and settings with hazardous materials or pressurized systems.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of Industrial Explosions</h2>
      <img src={dustExplosionImage} alt="Dust Explosion" className="section-image" />
      <ul>
        <li><strong>Combustible Dust:</strong> Fine particles from materials like coal or wood can ignite and cause dust explosions.</li>
        <li><strong>Gas Leaks:</strong> Flammable gases can accumulate and, with a spark, lead to catastrophic explosions.</li>
        <li><strong>Chemical Reactions:</strong> Improper handling of volatile chemicals can trigger exothermic reactions.</li>
        <li><strong>Equipment Malfunction:</strong> Defective machinery or electrical faults can spark fires.</li>
        <li><strong>Human Error:</strong> Inadequate training or procedural mistakes can lead to accidents.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>3. Types of Industrial Explosions</h2>
      <img src={gasLeakImage} alt="Gas Leak" className="section-image" />
      <ul>
        <li><strong>Mechanical Explosions:</strong> Caused by over-pressurization or equipment failure.</li>
        <li><strong>Chemical Explosions:</strong> Result from exothermic chemical reactions in manufacturing facilities.</li>
        <li><strong>Vapor Cloud Explosions:</strong> Occur when a flammable gas cloud ignites.</li>
        <li><strong>Dust Explosions:</strong> Fine combustible particles in air can ignite.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Impact of Industrial Explosions</h2>
      <img src={economicImpactImage} alt="Economic Impact" className="section-image" />
      <ul>
        <li><strong>Human Casualties:</strong> Explosions cause fatalities and injuries due to burns and blunt trauma.</li>
        <li><strong>Environmental Damage:</strong> Chemicals and debris contaminate soil, air, and water.</li>
        <li><strong>Economic Loss:</strong> Equipment destruction, halted production, and rebuilding efforts cost millions.</li>
        <li><strong>Community Displacement:</strong> Toxic substances may force evacuations.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>5. Safety Measures and Prevention Strategies</h2>
      <img src={safetyMeasuresImage} alt="Safety Measures" className="section-image" />
      <ul>
        <li><strong>Risk Assessment:</strong> Regularly assess and mitigate explosion risks.</li>
        <li><strong>Ventilation Systems:</strong> Prevents buildup of combustible gases or dust.</li>
        <li><strong>Explosion-Proof Equipment:</strong> Use certified equipment in hazardous areas.</li>
        <li><strong>Employee Training:</strong> Train employees in safety protocols and emergency response.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>6. Case Studies: Notable Industrial Explosions</h2>
      <img src={caseStudiesImage} alt="Case Studies" className="section-image" />
      <p><strong>1. Texas City Refinery Explosion (2005):</strong> Caused by hydrocarbon vapor ignition, resulting in 15 fatalities.</p>
      <p><strong>2. Bhopal Gas Tragedy (1984):</strong> A pesticide plant leak in India led to thousands of deaths.</p>
      <p><strong>3. West Fertilizer Plant Explosion (2013):</strong> An ammonium nitrate explosion led to widespread destruction.</p>
    </div>

    <div className="download-section">
      <a href={pdfIndustrialExplosions} download="Industrial_Explosions.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default IndustrialExplosions;
