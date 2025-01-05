import React from 'react';
import oilSpillMain from '../../../images/dam.png'; 
import tankerAccidentImage from '../../../images/dam.png'; 
import marineLifeImpactImage from '../../../images/dam.png'; 
import humanHealthImage from '../../../images/dam.png'; 
import economicImpactImage from '../../../images/dam.png'; 
import cleanUpImage from '../../../images/dam.png'; 
import caseStudiesImage from '../../../images/dam.png'; 
import pdfOilSpills from '../../../pdfs/ManMade/Oil Spills.pdf';
import '../../../root/Pdf_pages.scss';

const OilSpills = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Oil Spills: Causes, Effects, and Response Strategies</h1>
      <img src={oilSpillMain} alt="Oil Spill" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. Introduction to Oil Spills</h2>
      <p>
        Oil spills are accidental releases of crude or refined petroleum into the environment, primarily in marine and coastal regions. These incidents can devastate ecosystems, harm wildlife, and disrupt human communities. Notable spills, like the Exxon Valdez and Deepwater Horizon, underscore the environmental and economic impacts of large-scale oil spills.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of Oil Spills</h2>
      <img src={tankerAccidentImage} alt="Tanker Accident" className="section-image" />
      <ul>
        <li><strong>Tanker Accidents:</strong> Collisions and groundings of crude oil tankers can result in massive spills.</li>
        <li><strong>Offshore Drilling Blowouts:</strong> High-pressure blowouts at offshore rigs can release significant amounts of oil.</li>
        <li><strong>Pipeline Leaks:</strong> Corrosion and physical damage to pipelines can cause hard-to-detect leaks.</li>
        <li><strong>Storage Facility Failures:</strong> Poorly maintained storage facilities may leak or rupture.</li>
        <li><strong>Natural Disasters:</strong> Hurricanes, earthquakes, and tsunamis can damage offshore and coastal infrastructure, leading to spills.</li>
        <li><strong>Human Error:</strong> Mistakes in handling or maintaining oil facilities can cause spills.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>3. Environmental Impact of Oil Spills</h2>
      <img src={marineLifeImpactImage} alt="Marine Life Impact" className="section-image" />
      <ul>
        <li><strong>Marine Life:</strong> Oil can coat marine animals, clog fish gills, and harm vulnerable species like seabirds, otters, and whales.</li>
        <li><strong>Coral Reefs and Seagrass Beds:</strong> Oil suffocates coral reefs and seagrass habitats, harming marine biodiversity.</li>
        <li><strong>Coastal Ecosystems:</strong> Mangroves, salt marshes, and wetlands may be contaminated, disrupting local wildlife.</li>
        <li><strong>Long-term Damage:</strong> Toxins may settle into sediments, disrupting ecosystems for years.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Human Health and Economic Impact</h2>
      <img src={humanHealthImage} alt="Human Health" className="section-image" />
      <p><strong>Human Health Risks</strong></p>
      <ul>
        <li><strong>Exposure to Toxins:</strong> Oil components can cause respiratory issues, skin irritation, and long-term health risks.</li>
        <li><strong>Mental Health Effects:</strong> Oil spills cause stress, especially for communities dependent on affected resources.</li>
      </ul>
      <p><strong>Economic Impact</strong></p>
      <ul>
        <li><strong>Fishing Industry:</strong> Spills may close fisheries, impacting local communities.</li>
        <li><strong>Tourism:</strong> Polluted beaches and endangered wildlife harm local tourism.</li>
        <li><strong>Clean-Up Costs:</strong> Cleanup efforts can cost billions, depending on the spill.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>5. Oil Spill Clean-Up Methods</h2>
      <img src={cleanUpImage} alt="Clean Up" className="section-image" />
      <ul>
        <li><strong>Booms and Skimmers:</strong> Contain and remove oil from the water’s surface.</li>
        <li><strong>Dispersants:</strong> Break oil into droplets, aiding natural degradation.</li>
        <li><strong>Bioremediation:</strong> Uses microorganisms to break down oil naturally.</li>
        <li><strong>Controlled Burning:</strong> Burns oil on the water’s surface to prevent spreading.</li>
        <li><strong>Sorbents:</strong> Materials absorb oil from the water.</li>
        <li><strong>Manual Cleanup:</strong> Workers manually clean beaches and shorelines.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>6. Case Studies: Major Oil Spills</h2>
      <img src={caseStudiesImage} alt="Case Studies" className="section-image" />
      <p><strong>1. Exxon Valdez Spill (1989, Alaska):</strong> Spilled 11 million gallons, affecting 1,300 miles of coastline and local wildlife.</p>
      <p><strong>2. Deepwater Horizon Spill (2010, Gulf of Mexico):</strong> Released 210 million gallons, impacting marine life and coastal economies across five states.</p>
      <p><strong>3. Amoco Cadiz Spill (1978, France):</strong> 1.6 million barrels spilled, damaging local fishing and marine ecosystems.</p>
      <p><strong>4. Hebei Spirit Spill (2007, South Korea):</strong> Released 260,000 barrels, impacting 150 miles of coastline and local industries.</p>
    </div>

    <div className="content-section">
      <h2>7. Prevention of Oil Spills</h2>
      <ul>
        <li><strong>Improved Tanker Designs:</strong> Double-hulled tankers prevent spills.</li>
        <li><strong>Regular Inspections:</strong> Routine checks of pipelines and equipment detect issues early.</li>
        <li><strong>Advanced Monitoring Systems:</strong> Sensors quickly detect leaks or pressure changes.</li>
        <li><strong>Stricter Regulations:</strong> Regulations enforce safety measures and accountability.</li>
        <li><strong>Training and Safety Protocols:</strong> Proper training and emergency protocols can prevent accidents.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfOilSpills} download="Oil_Spills.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default OilSpills;
