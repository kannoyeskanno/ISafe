import React from 'react';
import vehicleFireImage from '../../../images/dam.png'; 
import fuelLeakImage from '../../../images/dam.png'; 
import electricalFireImage from '../../../images/dam.png'; 
import overheatingImage from '../../../images/dam.png'; 
import '../../../root/Pdf_pages.scss';
import pdf4 from '../../../pdfs/Fire/Vehicle Fires.pdf';


const VehicleFire = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Vehicle Fires: Causes, Prevention, and Emergency Procedures</h1>
      <img src={vehicleFireImage} alt="Vehicle Fire" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. What are Vehicle Fires?</h2>
      <p>
        Vehicle fires occur in cars, trucks, and other motor vehicles due to a combination of flammable fluids, heat, and electrical systems. These fires can spread quickly, posing a significant danger to occupants and nearby structures.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of Vehicle Fires</h2>
      <div className="cause">
        <h3>A. Fuel Leaks</h3>
        <img src={fuelLeakImage} alt="Fuel Leak" className="cause-image" />
        <p><strong>Definition:</strong> Leaking fuel from the fuel line or tank can ignite on hot surfaces.</p>
        <p><strong>Example:</strong> A cracked fuel line dripping gasoline onto the engine can cause a fire.</p>
        <p><strong>Prevention:</strong> Regularly check for fuel leaks and repair promptly.</p>
      </div>
      <div className="cause">
        <h3>B. Electrical Short Circuits</h3>
        <img src={electricalFireImage} alt="Electrical Fire in Vehicle" className="cause-image" />
        <p><strong>Definition:</strong> Wiring or battery issues can cause electrical fires in vehicles.</p>
        <p><strong>Example:</strong> Frayed wiring touching metal parts can spark a fire.</p>
        <p><strong>Prevention:</strong> Inspect wiring and avoid using substandard battery components.</p>
      </div>
      <div className="cause">
        <h3>C. Engine Overheating</h3>
        <img src={overheatingImage} alt="Engine Overheating" className="cause-image" />
        <p><strong>Definition:</strong> Excessive heat from the engine can ignite nearby flammable materials.</p>
        <p><strong>Example:</strong> An overheated engine can cause rubber or plastic parts to ignite.</p>
        <p><strong>Prevention:</strong> Regularly maintain the cooling system and check fluid levels.</p>
      </div>
      <div className="cause">
        <h3>D. Accidents and Collisions</h3>
        <p><strong>Definition:</strong> Vehicle impacts can rupture fuel lines, tanks, or batteries.</p>
        <p><strong>Example:</strong> A collision causing fuel to spill near the engine may ignite a fire.</p>
        <p><strong>Prevention:</strong> Drive cautiously and follow safety protocols to minimize accident risks.</p>
      </div>
    </div>

    <div className="content-section">
      <h2>3. Preventive Measures for Vehicle Fires</h2>
      <ul>
        <li>Regular Maintenance: Check for leaks, faulty wiring, and engine issues.</li>
        <li>Avoid Overloading Electrical Circuits: Avoid DIY modifications that add electrical load.</li>
        <li>Use Quality Parts: Use certified parts for repairs and maintenance.</li>
        <li>Carry a Fire Extinguisher: Store a small extinguisher in the car for emergencies.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Emergency Response for Vehicle Fires</h2>
      <ol>
        <li>Pull Over and Stop Safely: Turn off the engine immediately.</li>
        <li>Evacuate Passengers: Move everyone away from the vehicle to a safe distance.</li>
        <li>Do Not Open the Hood: This can increase oxygen supply and intensify the fire.</li>
        <li>Call Emergency Services: Contact firefighters and follow their instructions.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>5. Key Takeaways</h2>
      <ul>
        <li>Vehicle fires are often caused by fuel leaks, electrical issues, or accidents.</li>
        <li>Regular maintenance and quick response can prevent or mitigate these fires.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdf4} download="Vehicle_Fires.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default VehicleFire;
