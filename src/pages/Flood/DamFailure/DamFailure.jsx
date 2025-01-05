import React from 'react';
import damFailureImage from '../../../images/dam.png';
import banqiaoDamImage from '../../../images/dam.png';
import southForkDamImage from '../../../images/dam.png';
import pdfDamFailure from '../../../pdfs/Flood/Dam failure.pdf';
import '../../../root/Pdf_pages.scss';

const DamFailure = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Dam Failure Flooding: Causes, Impact, and Safety Measures</h1>
      <img src={damFailureImage} alt="Dam Failure Flooding" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. Understanding Dam Failures</h2>
      <p>
        Dam failures occur when the structural integrity of a dam is compromised, releasing a massive volume of water downstream. This flooding can be rapid and devastating, impacting communities, agriculture, and ecosystems within minutes. Dams vary in size and design, from small earth dams to massive concrete structures, and while they offer benefits like water storage, energy production, and flood control, they pose significant risks if poorly maintained or subjected to extreme conditions.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Causes of Dam Failure</h2>
      <div className="cause">
        <h3>A. Structural Weaknesses</h3>
        <p><strong>Definition:</strong> Aging infrastructure and design flaws are major factors. Older dams, especially those without regular inspections or upgrades, face increased risks of failure.</p>
      </div>
      <div className="cause">
        <h3>B. Overtopping</h3>
        <p><strong>Definition:</strong> When water levels exceed the dam’s capacity, water can flow over the top, eroding the structure from above and causing catastrophic failure.</p>
      </div>
      <div className="cause">
        <h3>C. Seismic Activity</h3>
        <p><strong>Definition:</strong> Earthquakes can destabilize a dam’s foundation, creating cracks or shifting materials, which compromises stability.</p>
      </div>
      <div className="cause">
        <h3>D. Operational Issues</h3>
        <p><strong>Definition:</strong> Poor maintenance, inadequate monitoring, or human error during operations can trigger dam failures.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>3. Notable Historical Dam Failures</h2>
      <div className="historical-failure">
        <h3>The Banqiao Dam Failure, China (1975)</h3>
        <img src={banqiaoDamImage} alt="Banqiao Dam" className="cause-image" />
        <p>This disaster caused one of the deadliest flooding events on record, with approximately 170,000 fatalities due to a rapid release of water following intense rain.</p>
      </div>
      <div className="historical-failure">
        <h3>The South Fork Dam Collapse, Pennsylvania (1889)</h3>
        <img src={southForkDamImage} alt="South Fork Dam" className="cause-image" />
        <p>The Johnstown Flood killed over 2,200 people and highlighted the deadly impact of poor dam construction and oversight.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>4. Environmental and Economic Impact</h2>
      <p>
        Dam failures don’t only affect human settlements; they also disrupt ecosystems. Floodwaters carry sediment, pollutants, and debris downstream, impacting water quality and aquatic life. Fertile land may become unusable due to silt deposits, while forests and wetlands are flooded, disrupting animal habitats.
      </p>
      <ul>
        <li>Costly repairs or reconstruction of infrastructure</li>
        <li>Loss of valuable water resources</li>
        <li>Destruction of farmland, impacting the local economy</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>5. Safety Measures and Government Regulations</h2>
      <ul>
        <li><strong>Regular Inspections:</strong> Engineers conduct inspections on structural stability, water levels, and maintenance needs.</li>
        <li><strong>Early Warning Systems:</strong> Systems in high-risk areas monitor water pressure and structural shifts, providing early alerts.</li>
        <li><strong>Evacuation Plans and Drills:</strong> Authorities work with communities to set evacuation routes and conduct emergency response drills.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>6. How to Prepare for Dam Failure</h2>
      <ul>
        <li><strong>Emergency Kit:</strong> Include essentials like water, non-perishable food, medications, and important documents.</li>
        <li><strong>Evacuation Route:</strong> Know the quickest route to high ground and practice it with your family.</li>
        <li><strong>Stay Informed:</strong> Follow weather forecasts and local announcements, especially during rainy seasons.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfDamFailure} download="Dam_Failure.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default DamFailure;
