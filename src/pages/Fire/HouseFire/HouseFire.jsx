import React from 'react';
import houseFireImage from '../../../images/dam.png'; 
import kitchenFireImage from '../../../images/dam.png'; 
import heatingFireImage from '../../../images/dam.png'; 
import electricalFireImage from '../../../images/dam.png'; 
import pdf3 from '../../../pdfs/Fire/House fire.pdf';
import '../../../root/Pdf_pages.scss';

const HouseFire = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>House Fires: Prevention, Common Hazards, and Response Tips</h1>
      <img src={houseFireImage} alt="House Fire" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. What are House Fires?</h2>
      <p>
        House fires are fires that begin in residential settings, often from cooking, heating, or electrical issues. They pose a high risk to people and property, making safety precautions essential.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of House Fires</h2>
      <div className="cause">
        <h3>A. Cooking Accidents</h3>
        <img src={kitchenFireImage} alt="Kitchen Fire" className="cause-image" />
        <p><strong>Definition:</strong> Fires caused by unattended stoves, grease splatters, and flammable items near heat sources.</p>
        <p><strong>Example:</strong> A pan of oil catches fire on the stove.</p>
        <p><strong>Prevention:</strong> Always monitor cooking and keep flammable items away from heat.</p>
      </div>
      <div className="cause">
        <h3>B. Heating Equipment</h3>
        <img src={heatingFireImage} alt="Heating Fire" className="cause-image" />
        <p><strong>Definition:</strong> Space heaters and fireplaces that can ignite nearby items.</p>
        <p><strong>Example:</strong> A space heater next to curtains causes a fire.</p>
        <p><strong>Prevention:</strong> Maintain a safe distance from combustible materials.</p>
      </div>
      <div className="cause">
        <h3>C. Electrical Malfunctions</h3>
        <img src={electricalFireImage} alt="Electrical Fire" className="cause-image" />
        <p><strong>Definition:</strong> Fires from faulty wiring, overloaded outlets, or malfunctioning appliances.</p>
        <p><strong>Example:</strong> An old wiring system causes an electrical fire.</p>
        <p><strong>Prevention:</strong> Ensure proper wiring and don’t overload outlets.</p>
      </div>
      <div className="cause">
        <h3>D. Smoking Materials</h3>
        <p><strong>Definition:</strong> Cigarettes and matches can ignite furniture or bedding.</p>
        <p><strong>Example:</strong> A cigarette left on a bed catches fire.</p>
        <p><strong>Prevention:</strong> Don’t smoke indoors or near flammable materials.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>3. Preventive Measures for House Fires</h2>
      <ul>
        <li>Install Smoke Alarms: Place alarms in every room and test monthly.</li>
        <li>Keep a Fire Extinguisher: Have an extinguisher in the kitchen and other key areas.</li>
        <li>Plan an Escape Route: Create a plan and practice it with your family.</li>
        <li>Supervise Cooking and Heating: Avoid leaving cooking or heating devices unattended.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Emergency Response to House Fires</h2>
      <ol>
        <li>Alert and Evacuate: Inform all occupants and evacuate immediately.</li>
        <li>Use Fire Extinguishers if Safe: Only if it’s a small fire and you’re trained to use one.</li>
        <li>Close Doors Behind You: Helps contain the fire while escaping.</li>
        <li>Call 911 or Local Fire Department: Report the fire from a safe location.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>5. Key Takeaways</h2>
      <ul>
        <li>House fires are often caused by cooking, heating, electrical issues, and smoking.</li>
        <li>Prevention involves installing smoke alarms, keeping extinguishers, and creating escape plans.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdf3} download="House_Fires.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default HouseFire;
