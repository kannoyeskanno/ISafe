import React from 'react';
import deforestationImage from '../../../images/dam.png';
import causesImage from '../../../images/dam.png';
import impactImage from '../../../images/dam.png';
import solutionsImage from '../../../images/dam.png';
import pdfDeforestation from '../../../pdfs/ManMade/Deforestation.pdf';
import '../../../root/Pdf_pages.scss';

const Deforestation = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Deforestation: Causes, Effects, and Solutions</h1>
      <img src={deforestationImage} alt="Deforestation" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. What is Deforestation?</h2>
      <p>
        Deforestation is the large-scale clearing or thinning of forests and woodlands, often resulting in damage to the land, loss of biodiversity, and increased greenhouse gas emissions. Forests play a crucial role in supporting biodiversity, stabilizing the climate, and providing resources for human populations.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Causes of Deforestation</h2>
      <img src={causesImage} alt="Causes of Deforestation" className="section-image" />
      <ul>
        <li><strong>Agriculture:</strong> Farmers clear forests for crops like soy, palm oil, and cattle ranching.</li>
        <li><strong>Logging:</strong> Removal of timber for construction and paper disrupts ecosystems.</li>
        <li><strong>Infrastructure Development:</strong> Roads, dams, and urban projects fragment habitats.</li>
        <li><strong>Mining:</strong> Mineral extraction leads to pollution and soil degradation.</li>
        <li><strong>Fuelwood Collection:</strong> Over-harvesting wood for fuel contributes to deforestation.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>3. Environmental Impact of Deforestation</h2>
      <img src={impactImage} alt="Environmental Impact" className="section-image" />
      <ul>
        <li><strong>Loss of Biodiversity:</strong> Habitat destruction threatens species and reduces genetic diversity.</li>
        <li><strong>Climate Change:</strong> Clearing forests releases CO₂, contributing to global warming.</li>
        <li><strong>Soil Degradation:</strong> Tree removal leads to soil erosion and decreased land fertility.</li>
        <li><strong>Water Cycle Disruption:</strong> Reduced rainfall and altered river flows impact ecosystems.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Socioeconomic Effects of Deforestation</h2>
      <p>
        Deforestation affects local communities and economies, including:
      </p>
      <ul>
        <li><strong>Displacement of Indigenous Communities:</strong> Loss of cultural heritage and land conflicts.</li>
        <li><strong>Economic Impacts:</strong> Long-term resource loss and reduction in tourism revenue.</li>
        <li><strong>Food Security Risks:</strong> Soil degradation reduces agricultural productivity.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>5. Solutions to Combat Deforestation</h2>
      <img src={solutionsImage} alt="Solutions to Deforestation" className="section-image" />
      <ul>
        <li><strong>Reforestation and Afforestation:</strong> Replanting and establishing forests to restore ecosystems.</li>
        <li><strong>Sustainable Forestry:</strong> Responsible harvesting minimizes ecological impact.</li>
        <li><strong>Protected Areas:</strong> Designating forests as protected conserves biodiversity.</li>
        <li><strong>Agroforestry:</strong> Combining agriculture with tree planting to conserve land.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfDeforestation} download="Deforestation.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default Deforestation;
