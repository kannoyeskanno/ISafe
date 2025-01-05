import React from 'react';
import lightningStrikeImage from '../../../images/dam.png'; 
import pdfLightningStrike from '../../../pdfs/Electrical/Lightning Strike.pdf';
import '../../../root/Pdf_pages.scss';

const LightningStrike = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Understanding Lightning Strikes</h1>
      <img src={lightningStrikeImage} alt="Lightning Strike" className="main-image" />
    </div>

    <div className="content-section">
      <h2>Introduction</h2>
      <p>
        Lightning strikes are powerful natural phenomena resulting from the buildup and discharge of electrical energy in the atmosphere. These discharges can cause significant damage to people, buildings, electronics, and landscapes. By understanding how lightning strikes occur, the associated risks, and effective safety measures, we can reduce the hazards linked to lightning.
      </p>
    </div>

    <div className="content-section">
      <h2>What is a Lightning Strike?</h2>
      <p>
        A lightning strike is a sudden and powerful discharge of electricity that occurs during a thunderstorm. It happens when there is an imbalance between electrically charged regions within clouds or between clouds and the ground. This imbalance leads to the rapid transfer of electrons, producing a massive bolt of electricity that we observe as lightning.
      </p>
      <ul>
        <li><strong>Cloud-to-Ground:</strong> The most dangerous form, where lightning strikes the Earth, often causing injury and damage.</li>
        <li><strong>Cloud-to-Cloud:</strong> Occurs within or between clouds and generally does not affect the ground.</li>
        <li><strong>Intra-Cloud:</strong> Appears as flashes within a single cloud.</li>
        <li><strong>Ground-to-Cloud:</strong> When lightning originates from the ground, often seen with tall structures like buildings and towers.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>The Science Behind Lightning</h2>
      <p>
        Lightning forms when particles within a cloud, such as water droplets, ice, and dust, collide and build up static electricity. This charge separates within the cloud, with positive charges accumulating at the top and negative charges at the bottom. Eventually, the difference in electrical potential becomes so strong that it overcomes air resistance, causing a rapid discharge in the form of a lightning bolt.
      </p>
      <ul>
        <li><strong>Charge Separation:</strong> Collisions of particles within clouds generate static electricity, leading to charge separation.</li>
        <li><strong>Step Leader:</strong> An invisible channel of charged air moves downward from the cloud toward the ground, preparing a path for the lightning.</li>
        <li><strong>Return Stroke:</strong> When the step leader meets the positive charges on the ground, a return stroke of high-energy electricity travels upward, creating a bright flash.</li>
        <li><strong>Heat and Light:</strong> The energy release from lightning causes the air around it to heat up to 50,000°F, producing light and thunder.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Dangers Associated with Lightning Strikes</h2>
      <ul>
        <li><strong>Human Injury and Fatalities:</strong> Direct strikes, side flashes, and ground currents from lightning can cause serious injury or even death, including cardiac arrest, nervous system damage, and burns.</li>
        <li><strong>Property Damage:</strong> Lightning can severely damage buildings, trees, and outdoor structures, especially without protective grounding.</li>
        <li><strong>Fire Hazards:</strong> Lightning can ignite wildfires, especially in dry areas, and start fires in structures by igniting flammable materials.</li>
        <li><strong>Damage to Electronics:</strong> Electrical surges from nearby strikes can destroy electronic devices and appliances.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Common Locations for Lightning Strikes</h2>
      <ul>
        <li><strong>Tall Trees:</strong> Trees are natural targets due to their height and sap, which acts as a conductor.</li>
        <li><strong>Tall Buildings and Towers:</strong> Often equipped with lightning rods to channel strikes safely to the ground.</li>
        <li><strong>Open Fields and Bodies of Water:</strong> Lightning is likely to strike the highest point in an open area.</li>
        <li><strong>Mountain Peaks:</strong> Prone to lightning strikes due to elevation.</li>
        <li><strong>Metal Structures:</strong> Vehicles, fences, and other metal objects can attract lightning.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Safety Tips During a Lightning Storm</h2>
      <h3>Indoors:</h3>
      <ul>
        <li>Stay Inside: Avoid going outdoors during a storm.</li>
        <li>Unplug Electronics: Disconnect appliances and electronics to avoid damage from power surges.</li>
        <li>Stay Away from Windows and Doors: Lightning can travel through wiring and plumbing.</li>
        <li>Avoid Water: Refrain from showering or washing dishes, as plumbing can conduct electricity.</li>
      </ul>
      <h3>Outdoors:</h3>
      <ul>
        <li>Seek Shelter: Find a sturdy building or vehicle for protection.</li>
        <li>Avoid Tall Structures: Don’t stand under tall trees, near poles, or on high ground.</li>
        <li>Stay Away from Water and Metal Objects.</li>
      </ul>
      <h3>In Vehicles:</h3>
      <ul>
        <li>Stay Inside: Vehicles provide a metal shell that can divert lightning around you.</li>
        <li>Avoid Touching Metal Parts: Keep hands away from door handles and metal surfaces.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>Preventing Damage to Property</h2>
      <ul>
        <li>Install Lightning Rods on tall structures to safely channel strikes into the ground.</li>
        <li>Use Surge Protectors for sensitive electronics to prevent damage from surges.</li>
        <li>Tree Trimming near structures can reduce the risk of fire or damage.</li>
        <li>Ensure proper grounding of electrical and plumbing systems.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>What to Do if Someone is Struck by Lightning</h2>
      <ol>
        <li>Call Emergency Services immediately to get medical help.</li>
        <li>Administer CPR if necessary.</li>
        <li>Move to a Safe Location, away from open spaces or tall objects.</li>
        <li>Avoid Touching Burned Areas, as lightning can cause severe burns.</li>
      </ol>
    </div>

    <div className="content-section">
      <h2>Case Study: Lightning Strike Incident</h2>
      <p>
        In 2023, a severe lightning storm struck a rural community in the Midwest, causing widespread tree fires and property damage. One individual was struck while near a tall tree. The incident underscored the importance of lightning safety and storm preparedness.
      </p>
    </div>

    <div className="content-section">
      <h2>Conclusion</h2>
      <p>
        Lightning strikes are unpredictable events that pose risks to people, property, and the environment. Understanding lightning and following safety practices, such as seeking shelter and unplugging devices, can help protect against its destructive force.
      </p>
    </div>

    <div className="download-section">
      <a href={pdfLightningStrike} download="Understanding_Lightning_Strikes.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default LightningStrike;
