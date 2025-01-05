import React from 'react';
import coastalFloodImage from '../../../images/dam.png'; 
import pdfCoastalFlooding from '../../../pdfs/Flood/Coastal Flooding.pdf'; 
import '../../../root/Pdf_pages.scss'; 
const CoastalFlooding = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Coastal Flooding: Causes, Impact, and Safety Measures</h1>
      <img src={coastalFloodImage} alt="Coastal Flooding" className="main-image" />
    </div>

    <div className="content-section">
      <h2>Overview</h2>
      <p>
        Coastal flooding occurs when water inundates low-lying areas along the coast, primarily due to extreme high tides, storm surges, and sea-level rise. Unlike river or flash floods, coastal flooding is typically linked to events like hurricanes, tsunamis, and global sea-level increases caused by climate change. Communities located near coastlines are at high risk, particularly densely populated cities, port towns, and low-lying island nations.
        Coastal flooding affects millions of people worldwide, resulting in extensive economic losses, environmental damage, and threats to human safety.
      </p>
    </div>

    <div className="content-section">
      <h2>Primary Causes of Coastal Flooding</h2>
      <ul>
        <li><strong>Storm Surges:</strong> Hurricanes, cyclones, and tropical storms cause storm surges that push seawater onto land. High winds drive large amounts of water toward the shore, leading to rapid flooding.</li>
        <li><strong>High Tides and Spring Tides:</strong> During full or new moons, gravitational forces lead to higher-than-normal tides, exacerbating coastal flooding during storms.</li>
        <li><strong>Sea-Level Rise:</strong> Climate change is causing global sea levels to rise as glaciers and polar ice melt. Rising seas contribute to "sunny day" or nuisance flooding even in calm weather.</li>
        <li><strong>Coastal Erosion:</strong> Erosion of coastlines reduces natural barriers like beaches and sand dunes, increasing vulnerability to flooding.</li>
        <li><strong>Human Activity:</strong> Land reclamation, removal of natural vegetation, and urbanization near shorelines reduce the natural resilience of coastal areas, intensifying flood risks.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>The Impact of Coastal Flooding</h2>
      <ul>
        <li><strong>Loss of Life and Displacement:</strong> Coastal floods often lead to casualties and force large numbers of people to evacuate, resulting in temporary or permanent displacement.</li>
        <li><strong>Economic Losses:</strong> Floods damage infrastructure, homes, businesses, and critical facilities, leading to significant financial losses. Port cities, which handle much of global trade, can suffer severely.</li>
        <li><strong>Environmental Damage:</strong> Floodwaters bring saltwater intrusion, damaging freshwater ecosystems, agricultural land, and drinking water sources.</li>
        <li><strong>Loss of Coastal Habitats:</strong> Wetlands, mangroves, and coral reefs are vital coastal buffers that suffer degradation due to frequent flooding, affecting biodiversity and marine life.</li>
        <li><strong>Health Risks:</strong> Floodwaters can carry pollutants, sewage, and disease-causing pathogens, resulting in health issues for affected populations.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Notable Historical Examples of Coastal Flooding</h2>
      <ul>
        <li><strong>Hurricane Katrina (2005):</strong> In New Orleans, USA, storm surge flooding caused catastrophic damage, resulting in over 1,800 fatalities and displacing hundreds of thousands.</li>
        <li><strong>Typhoon Haiyan (2013):</strong> One of the most powerful storms to make landfall, Typhoon Haiyan caused severe coastal flooding in the Philippines, with over 6,000 lives lost.</li>
        <li><strong>North Sea Flood (1953):</strong> A deadly combination of high tides and a storm surge caused severe coastal flooding in the Netherlands, the UK, and Belgium, resulting in 2,500 deaths.</li>
        <li><strong>Indian Ocean Tsunami (2004):</strong> The earthquake-triggered tsunami caused massive coastal flooding across 14 countries, with over 230,000 people killed.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Climate Change and Coastal Flooding</h2>
      <ul>
        <li><strong>Accelerated Sea-Level Rise:</strong> Rising global temperatures are melting glaciers and ice sheets, contributing to faster sea-level rise, especially in low-lying coastal regions.</li>
        <li><strong>Increased Storm Intensity:</strong> Warmer ocean waters fuel stronger hurricanes and typhoons, increasing the likelihood of severe storm surges and associated coastal flooding.</li>
        <li><strong>Rising Ocean Temperatures:</strong> Ocean thermal expansion (the expansion of seawater as it warms) is a key factor in global sea-level rise, impacting coastal areas worldwide.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Safety Tips for Coastal Flooding</h2>
      <h3>Preparation Before a Flood</h3>
      <ul>
        <li><strong>Stay Informed:</strong> Monitor local weather stations, marine forecasts, and alerts for coastal flood warnings.</li>
        <li><strong>Create an Evacuation Plan:</strong> Identify higher ground locations and have a planned evacuation route. Ensure all family members know the plan.</li>
        <li><strong>Prepare a Flood Kit:</strong> Include essentials such as food, water, medications, waterproof containers for documents, and other necessities in case of evacuation.</li>
        <li><strong>Protect Your Property:</strong> Use sandbags to divert water and secure outdoor items to prevent them from becoming hazards.</li>
      </ul>

      <h3>During a Flood</h3>
      <ul>
        <li><strong>Evacuate if Advised:</strong> Follow local authority instructions. Avoid walking or driving through floodwaters, as it may be deeper or faster than it appears.</li>
        <li><strong>Move to Higher Ground:</strong> If evacuation is not possible, move to the highest level of your home, avoiding areas like basements.</li>
        <li><strong>Stay Away from Power Lines:</strong> Floodwater and electricity are a dangerous combination. Avoid any fallen power lines or submerged electrical outlets.</li>
      </ul>

      <h3>After a Flood</h3>
      <ul>
        <li><strong>Return Home Cautiously:</strong> Avoid entering flooded buildings until they have been checked for structural safety.</li>
        <li><strong>Sanitize and Avoid Contamination:</strong> Wear protective gear when cleaning up and disinfect areas to prevent disease.</li>
        <li><strong>Check for Hazards:</strong> Flooding can bring debris, sharp objects, and wildlife into buildings, so inspect surroundings carefully.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Coastal Flood Mitigation and Adaptation Strategies</h2>
      <ul>
        <li><strong>Coastal Barriers and Infrastructure:</strong> Countries are investing in infrastructure, such as seawalls, levees, and flood gates, to block incoming storm surges.</li>
        <li><strong>Mangrove and Wetland Restoration:</strong> Mangroves, wetlands, and coral reefs serve as natural barriers to flooding. Restoring these ecosystems helps absorb wave energy and reduce flood impact.</li>
        <li><strong>Elevated Building Designs:</strong> Many coastal cities encourage or mandate building elevated structures, reducing flood damage in vulnerable areas.</li>
        <li><strong>Floodplain Zoning:</strong> Governments can restrict development in high-risk flood zones to minimize property and infrastructure damage.</li>
        <li><strong>Managed Retreat:</strong> In cases where flood risk is too high, managed retreat involves relocating communities to safer areas, though this is often seen as a last-resort option.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfCoastalFlooding} download="Coastal_Flooding.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default CoastalFlooding;
