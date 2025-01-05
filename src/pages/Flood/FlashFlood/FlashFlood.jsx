import React from 'react';
import flashFloodImage from '../../../images/dam.png'; 
import pdfFlashFloods from '../../../pdfs/Flood/Flash Flood.pdf'; 
import '../../../root/Pdf_pages.scss'; 

const FlashFloods = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Flash Floods: Causes, Impact, and Safety Measures</h1>
      <img src={flashFloodImage} alt="Flash Floods" className="main-image" />
    </div>

    <div className="content-section">
      <h2>Overview</h2>
      <p>
        A flash flood is a sudden and rapid flooding event occurring within hours—or even minutes—of heavy rainfall or sudden water release. Flash floods are dangerous due to their speed and unpredictability, often occurring in areas with poor drainage systems, dry riverbeds, or valleys. They cause significant weather-related fatalities each year and can damage infrastructure, agriculture, and ecosystems.
      </p>
    </div>

    <div className="content-section">
      <h2>Causes of Flash Floods</h2>
      <ul>
        <li><strong>Heavy Rainfall:</strong> Intense or prolonged rainfall can overwhelm drainage systems.</li>
        <li><strong>Sudden Snowmelt:</strong> Warm temperatures melting snow rapidly increase river or stream levels.</li>
        <li><strong>Dam and Levee Failure:</strong> Structural failures release large volumes of water instantly.</li>
        <li><strong>Topography:</strong> Steep slopes or dry riverbeds make areas more prone to flash floods.</li>
        <li><strong>Urbanization:</strong> Paved surfaces increase runoff, reducing natural drainage.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>The Impact of Flash Floods</h2>
      <ul>
        <li><strong>Loss of Life:</strong> The rapid onset of flash floods can catch people off guard.</li>
        <li><strong>Property Damage:</strong> Infrastructure and homes may be destroyed within minutes.</li>
        <li><strong>Transportation Disruption:</strong> Roads and bridges often become impassable.</li>
        <li><strong>Environmental Damage:</strong> Soil erosion and pollution impact ecosystems.</li>
        <li><strong>Agricultural Loss:</strong> Crops, soil, and equipment may suffer extensive damage.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Historical Examples of Flash Floods</h2>
      <ul>
        <li><strong>Johnstown Flood (1889):</strong> Pennsylvania's dam failure killed over 2,200 people.</li>
        <li><strong>Big Thompson Canyon Flood (1976):</strong> Colorado’s flash flood resulted in 144 deaths.</li>
        <li><strong>Lynmouth Flood (1952):</strong> A UK flood killed 34 people due to torrential rain.</li>
        <li><strong>Kedarnath Flood (2013):</strong> Monsoon rains in India led to thousands of casualties.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Environmental and Climate Factors</h2>
      <ul>
        <li><strong>Increased Rainfall:</strong> Higher temperatures cause more intense rainfall.</li>
        <li><strong>Wildfires:</strong> Burned areas with poor soil absorption are prone to flash floods.</li>
        <li><strong>Extreme Weather Events:</strong> Hurricanes and storms increase flood risks.</li>
        <li><strong>Sea-Level Rise:</strong> Coastal areas face higher risks due to storm surges.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Flash Flood Safety and Preparedness</h2>
      <ul>
        <li><strong>Stay Informed:</strong> Follow weather alerts and warnings.</li>
        <li><strong>Emergency Kit:</strong> Keep essentials like food, water, and documents in waterproof containers.</li>
        <li><strong>Know Your Area:</strong> Understand local flood risks and evacuation routes.</li>
        <li><strong>Avoid Low-Lying Areas:</strong> Stay away from rivers, valleys, or basements during floods.</li>
        <li><strong>Move to Higher Ground:</strong> Evacuate to higher ground if flood warnings are issued.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfFlashFloods} download="Flash_Floods.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default FlashFloods;
