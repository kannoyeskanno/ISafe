import React from 'react';
import forestFireImage from '../../../images/dam.png'; 
import surfaceFireImage from '../../../images/dam.png'; 
import crownFireImage from '../../../images/dam.png'; 
import groundFireImage from '../../../images/dam.png';
import pdf5 from '../../../pdfs/Fire/Forest fires.pdf';
import '../../../root/Pdf_pages.scss';


const ForestFire = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Forest Fires: Types, Causes, Prevention, and Safety Guidelines</h1>
      <img src={forestFireImage} alt="Forest Fire" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. What are Forest Fires?</h2>
      <p>
        Forest fires are uncontrolled fires occurring in forests, grasslands, and other natural areas. They spread quickly due to flammable vegetation and environmental factors, posing a threat to wildlife, ecosystems, and human communities.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Types of Forest Fires</h2>
      <div className="fire-type">
        <h3>A. Surface Fires</h3>
        <img src={surfaceFireImage} alt="Surface Fire" className="fire-image" />
        <p><strong>Description:</strong> Fires that burn the forest floor, consuming leaves, branches, and grass.</p>
        <p><strong>Example:</strong> A fire that spreads across dry grass without reaching tree canopies.</p>
      </div>
      <div className="fire-type">
        <h3>B. Crown Fires</h3>
        <img src={crownFireImage} alt="Crown Fire" className="fire-image" />
        <p><strong>Description:</strong> Fires that reach the treetops, often spreading rapidly.</p>
        <p><strong>Example:</strong> A fire fueled by wind, climbing from tree to tree.</p>
      </div>
      <div className="fire-type">
        <h3>C. Ground Fires</h3>
        <img src={groundFireImage} alt="Ground Fire" className="fire-image" />
        <p><strong>Description:</strong> Fires that burn below the surface in organic soil and peat.</p>
        <p><strong>Example:</strong> A smoldering fire that moves slowly underground and is hard to detect.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>3. Common Causes of Forest Fires</h2>
      <div className="cause">
        <h3>A. Lightning Strikes</h3>
        <p><strong>Definition:</strong> Lightning ignites dry vegetation, causing fires in remote areas.</p>
        <p><strong>Example:</strong> A lightning strike in a dry forest triggers a fire.</p>
        <p><strong>Prevention:</strong> Although unpreventable, monitoring can help detect fires early.</p>
      </div>
      <div className="cause">
        <h3>B. Human Activities</h3>
        <p><strong>Definition:</strong> Activities like campfires, fireworks, and discarded cigarettes.</p>
        <p><strong>Example:</strong> A campfire not fully extinguished can spread into a forest.</p>
        <p><strong>Prevention:</strong> Educate on safe practices and impose fire bans in dry seasons.</p>
      </div>
      <div className="cause">
        <h3>C. Arson</h3>
        <p><strong>Definition:</strong> Intentional setting of fires, often in dry seasons.</p>
        <p><strong>Example:</strong> A deliberately started fire that spreads through a forest.</p>
        <p><strong>Prevention:</strong> Increase surveillance and impose severe penalties for arson.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>4. Forest Fire Prevention</h2>
      <ul>
        <li>Public Awareness: Educate communities on fire risks and responsible behavior.</li>
        <li>Create Firebreaks: Clear vegetation to prevent fire spread.</li>
        <li>Early Detection Systems: Use satellites, drones, and lookout towers to spot fires.</li>
        <li>Controlled Burns: Conduct small, planned burns to reduce excess vegetation.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>5. Emergency Response to Forest Fires</h2>
      <ol>
        <li>Evacuate Immediately: Leave the area if the fire threatens human safety.</li>
        <li>Report the Fire: Contact local authorities to report the location.</li>
        <li>Avoid Downwind Areas: Stay clear of smoke and heat direction.</li>
        <li>Follow Official Instructions: Adhere to guidelines from firefighters and emergency personnel.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>6. Key Takeaways</h2>
      <ul>
        <li>Forest fires are mainly caused by natural events (lightning) and human activities.</li>
        <li>Preventive strategies include firebreaks, controlled burns, and public education.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdf5} download="Forest_Fires.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default ForestFire;
