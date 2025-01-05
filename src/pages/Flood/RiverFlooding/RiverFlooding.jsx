import React from 'react';
import riverFloodingImage from '../../../images/dam.png';
import mississippiFloodImage from '../../../images/dam.png';
import pdfRiverFlooding from '../../../pdfs/Flood/River Flooding.pdf';
import '../../../root/Pdf_pages.scss';

const RiverFlooding = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>River Flooding: Causes, Consequences, and Safety Measures</h1>
      <img src={riverFloodingImage} alt="River Flooding" className="main-image" />
    </div>

    <div className="content-section">
      <h2>Overview</h2>
      <p>
        River flooding, also known as fluvial flooding, occurs when rivers exceed their capacity due to factors like heavy rainfall, rapid snowmelt, or ice jams. This type of flooding can lead to significant property damage, displacement of communities, and ecological disruption. Factors like climate change, deforestation, and urbanization have intensified these events.
      </p>
    </div>

    <div className="content-section">
      <h2>Causes of River Flooding</h2>
      <ul>
        <li><strong>Heavy Rainfall:</strong> Prolonged or intense rainfall can cause rivers to overflow, especially in areas with poor drainage.</li>
        <li><strong>Snowmelt:</strong> Rapid spring snowmelt contributes to flooding as frozen ground prevents water absorption.</li>
        <li><strong>Ice Jams:</strong> Ice blockages can obstruct river flow, leading to upstream flooding until the ice clears.</li>
        <li><strong>Deforestation and Land Use Changes:</strong> Removing vegetation reduces water absorption, increasing runoff.</li>
        <li><strong>Urbanization:</strong> Development near riverbanks reduces natural absorption, increasing flood risks.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Impact of River Flooding</h2>
      <ul>
        <li><strong>Community Displacement:</strong> Flooding may require relocation of residents, creating long-term social impacts.</li>
        <li><strong>Health Risks:</strong> Contaminated floodwaters can spread waterborne diseases.</li>
        <li><strong>Economic Losses:</strong> Damage to infrastructure and property can have lasting financial effects.</li>
        <li><strong>Environmental Damage:</strong> Floodwaters disrupt ecosystems and reduce water quality.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Historical Examples of River Flooding</h2>
      <ul>
        <li><strong>The Great Mississippi Flood (1927):</strong> One of the largest displacements in U.S. history, affecting multiple states.</li>
        <li><strong>Yangtze River Floods (1931):</strong> Among the deadliest floods, causing millions of casualties in China.</li>
        <li><strong>European Floods (2002):</strong> Floods along rivers like the Danube caused over $15 billion in damages.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Global Statistics on River Flooding</h2>
      <ul>
        <li><strong>Annual Death Toll:</strong> Flooding causes around 5,000 to 10,000 deaths yearly.</li>
        <li><strong>Economic Impact:</strong> Flooding costs the global economy about $100 billion annually.</li>
        <li><strong>At-Risk Populations:</strong> Over 1.5 billion people live in flood-prone areas worldwide.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>The Role of Climate Change in River Flooding</h2>
      <ul>
        <li><strong>Increased Rainfall:</strong> Warmer temperatures lead to more intense and frequent rainfall.</li>
        <li><strong>Accelerated Snowmelt:</strong> Rising temperatures cause earlier and faster snowmelt, increasing spring runoff.</li>
        <li><strong>Sea Level Rise:</strong> Higher sea levels exacerbate river flooding in coastal areas.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Flood Control and Mitigation Measures</h2>
      <ul>
        <li><strong>Levees and Dikes:</strong> Barriers prevent river overflow, though they require maintenance.</li>
        <li><strong>Floodwalls:</strong> High barriers, particularly in urban areas, protect properties from rising waters.</li>
        <li><strong>Dams and Reservoirs:</strong> These structures control water flow to reduce downstream flooding.</li>
        <li><strong>Floodplain Management:</strong> Restricting development on flood-prone land allows natural absorption.</li>
        <li><strong>River Channel Modifications:</strong> Widening or deepening channels can control overflow during heavy rains.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Environmental Considerations</h2>
      <ul>
        <li><strong>Disruption of Habitats:</strong> Levees and dams can displace species reliant on floodplain ecosystems.</li>
        <li><strong>Sediment Loss:</strong> Floodplain sediment deposits are crucial for soil fertility, impacted by flood control structures.</li>
        <li><strong>Altered Water Flow:</strong> Dams change river flow patterns, affecting fish migration and river health.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Safety and Preparedness Tips</h2>
      <ul>
        <li><strong>Emergency Plan:</strong> Know evacuation routes and establish a family communication plan.</li>
        <li><strong>Emergency Kit:</strong> Keep essentials like food, water, medication, and important documents ready.</li>
        <li><strong>Stay Informed:</strong> Monitor weather updates and local alerts for flood warnings.</li>
        <li><strong>Home Protection:</strong> Consider flood barriers and elevate electrical systems if you live near a river.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>River Flooding in the Modern World</h2>
      <p>
        River flooding remains a major global hazard, especially in rapidly urbanizing areas. Sustainable development, modern flood control technologies, and proactive community measures are essential to minimize risks. Governments play a crucial role through early-warning systems, strategic urban planning, and international collaboration to protect vulnerable populations.
      </p>
    </div>

    <div className="download-section">
      <a href={pdfRiverFlooding} download="River_Flooding.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default RiverFlooding;
