import React from 'react';
import electricalFireImage from '../../../images/shortCircuitImage.jpg'; 
import causeImage1 from '../../../images/dam.png'; 
// import causeImage2 from '../../../images/overloaded_circuit.png'; 
// import causeImage3 from '../../../images/damaged_appliance.png'; 
import pdf2 from '../../../pdfs/Fire/Electrical Fires.pdf';
import '../../../root/Pdf_pages.scss';

const ElectricalFire = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Electrical Fires: Understanding Causes, Prevention, and Safety Protocols</h1>
      <img src={electricalFireImage} alt="Electrical Fire" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. What are Electrical Fires?</h2>
      <p>
        Electrical fires are caused by electrical issues such as short circuits, faulty wiring, and overloaded circuits. They are particularly dangerous because water cannot be used to extinguish them, and they can quickly spread through wiring.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Causes of Electrical Fires</h2>
      <div className="cause">
        <h3>A. Short Circuits</h3>
        <p><strong>Definition:</strong> Occurs when electricity takes an unintended path, often causing sparks.</p>
        <p><strong>Example:</strong> Exposed wires in a damaged outlet can spark and start a fire.</p>
        <p><strong>Prevention:</strong> Use insulated wires and inspect outlets regularly.</p>
      </div>
      <div className="cause">
        <h3>B. Overloaded Circuits</h3>
        <p><strong>Definition:</strong> Too many devices on one circuit lead to overheating.</p>
        <p><strong>Example:</strong> Plugging multiple appliances into one outlet creates excess heat.</p>
        <p><strong>Prevention:</strong> Use surge protectors and avoid daisy-chaining extension cords.</p>
      </div>
      <div className="cause">
        <h3>C. Damaged Appliances and Wiring</h3>
        <p><strong>Definition:</strong> Worn-out wiring or appliances may overheat and ignite.</p>
        <p><strong>Example:</strong> An old toaster with frayed wiring catches fire.</p>
        <p><strong>Prevention:</strong> Replace old appliances and repair faulty wiring.</p>
      </div>
      <div className="cause">
        <h3>D. Improper Installation</h3>
        <p><strong>Definition:</strong> Incorrectly installed wiring can increase fire risk.</p>
        <p><strong>Example:</strong> A DIY electrical project with ungrounded wires sparks a fire.</p>
        <p><strong>Prevention:</strong> Use licensed electricians for installation and repairs.</p>
      </div>
      
      <div className="image-container">
        <div className="image-item">
          <img src={causeImage1} alt="Short Circuits" />
          <p>Short Circuits</p>
        </div>
        <div className="image-item">
          <img src={causeImage1} alt="Overloaded Circuits" />
          <p>Overloaded Circuits</p>
        </div>
        <div className="image-item">
          <img src={causeImage1} alt="Damaged Appliances and Wiring" />
          <p>Damaged Appliances</p>
        </div>
      </div>
    </div>

    <div className="content-section">
      <h2>3. Fire Prevention Tips for Electrical Fires</h2>
      <ul>
        <li>Don’t Overload Outlets: Distribute devices across different outlets.</li>
        <li>Inspect Wiring Regularly: Check for wear and fraying in cables and outlets.</li>
        <li>Turn Off Appliances When Not in Use: Prevent overheating by unplugging unused devices.</li>
        <li>Upgrade Older Wiring Systems: Old homes or buildings may need rewiring to handle modern electrical loads.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Emergency Response to Electrical Fires</h2>
      <ol>
        <li>Do Not Use Water: Water can worsen the fire due to electricity conduction.</li>
        <li>Disconnect Power at Breaker: If safe, cut the power supply at the circuit breaker.</li>
        <li>Use a Class C Fire Extinguisher: These are designed for electrical fires.</li>
        <li>Evacuate and Contact Fire Department: Evacuate immediately if the fire is spreading.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>5. Key Takeaways</h2>
      <ul>
        <li>Electrical fires can start from short circuits, overloaded outlets, and faulty appliances.</li>
        <li>Prevention involves inspecting wiring, not overloading circuits, and using Class C extinguishers.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdf2} download="Electrical_Fires.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default ElectricalFire;
