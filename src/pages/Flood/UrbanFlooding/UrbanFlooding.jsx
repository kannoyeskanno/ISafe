import React from 'react';
import urbanFloodingImage from '../../../images/dam.png';
import mumbaiFloodImage from '../../../images/dam.png';
import pdfUrbanFlooding from '../../../pdfs/Flood/Urban Flooding.pdf';
import '../../../root/Pdf_pages.scss';

const UrbanFlooding = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Urban Flooding: Causes, Consequences, and Safety Measures</h1>
      <img src={urbanFloodingImage} alt="Urban Flooding" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. Introduction to Urban Flooding</h2>
      <p>
        Urban flooding occurs in densely populated areas, often resulting from rainfall that exceeds drainage capacity. Unlike river flooding, urban flooding is typically caused by inadequate infrastructure, making it an issue even during moderate rain events in cities with aging or poorly designed drainage systems. Increasing urbanization and climate change are intensifying rainfall, putting added stress on city drainage.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Why Urban Flooding Happens</h2>
      <div className="factor">
        <h3>A. Impervious Surfaces</h3>
        <p><strong>Explanation:</strong> Roads, buildings, and sidewalks prevent water absorption, forcing rain to flow into drains.</p>
      </div>
      <div className="factor">
        <h3>B. Climate Change</h3>
        <p><strong>Explanation:</strong> Warmer temperatures lead to more intense rainfall, overwhelming drainage systems more frequently.</p>
      </div>
      <div className="factor">
        <h3>C. Poor Waste Management</h3>
        <p><strong>Explanation:</strong> Improper disposal of waste can clog drains, reducing their effectiveness and leading to flash floods.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>3. Consequences of Urban Flooding</h2>
      <ul>
        <li><strong>Health Risks:</strong> Floodwater often contains contaminants, exposing residents to waterborne illnesses and pollutants.</li>
        <li><strong>Traffic Disruptions:</strong> Flooded streets disrupt transportation, making it difficult for emergency responders and essential services to operate.</li>
        <li><strong>Damage to Property:</strong> Repeated flooding weakens building foundations and can lead to costly repairs, insurance claims, and economic losses for families and businesses.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Case Study: 2005 Mumbai Flood</h2>
      <img src={mumbaiFloodImage} alt="Mumbai Flood" className="cause-image" />
      <p>
        In 2005, Mumbai experienced one of its worst urban flooding events due to heavy monsoon rains and insufficient drainage. Floodwaters affected transportation, businesses, and homes, with economic losses estimated in the millions. This event highlighted the urgent need for updated drainage infrastructure in rapidly growing urban areas.
      </p>
    </div>

    <div className="content-section">
      <h2>5. Strategies for Reducing Urban Flooding</h2>
      <ul>
        <li><strong>Green Infrastructure:</strong> Rain gardens, green roofs, and permeable pavements help manage stormwater by allowing water to soak into the ground naturally.</li>
        <li><strong>Drainage System Upgrades:</strong> Expanding and modernizing stormwater systems can accommodate greater rainfall volumes.</li>
        <li><strong>Public Awareness:</strong> Campaigns that educate residents on the importance of proper waste disposal help keep drains clear.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>6. Safety Tips for Urban Flooding</h2>
      <ul>
        <li><strong>Avoid Flooded Areas:</strong> Roads with standing water can be hazardous, so choose alternative routes.</li>
        <li><strong>Prepare an Emergency Kit:</strong> Keep food, water, and first aid supplies handy, especially during rainy seasons.</li>
        <li><strong>Turn Off Power Sources:</strong> Prevent electrical hazards by switching off appliances if flooding threatens your home.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfUrbanFlooding} download="Urban_Flooding.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default UrbanFlooding;
