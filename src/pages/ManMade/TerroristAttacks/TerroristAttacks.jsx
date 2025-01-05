import React from 'react';
import unpredictabilityImage from '../../../images/dam.png';
import targetSymbolImage from '../../../images/dam.png';
import impactImage from '../../../images/dam.png';
import responseImage from '../../../images/dam.png';
import pdfTerroristAttacks from '../../../pdfs/ManMade/Terrorist Attacks.pdf';
import '../../../root/Pdf_pages.scss';

const TerroristAttacks = () => (
  <div className="pdf-page">
    <div className="header">
      <h1>Terrorist Attacks: Causes, Types, Impact, and Prevention</h1>
      <img src={unpredictabilityImage} alt="Unpredictability" className="main-image" />
    </div>

    <div className="content-section">
      <h2>1. Understanding Terrorism and Its Motivations</h2>
      <p>
        Terrorism refers to the use of violence, threats, or intimidation, often targeting civilians, to achieve political, ideological, or religious objectives. The goal is to instill fear, disrupt normal activities, and attract attention to a cause.
      </p>
    </div>

    <div className="content-section">
      <h2>2. Common Characteristics of Terrorist Attacks</h2>
      <img src={targetSymbolImage} alt="Symbolic Targeting" className="section-image" />
      <ul>
        <li><strong>Unpredictability:</strong> Attacks are often sudden and designed to catch victims off guard.</li>
        <li><strong>Targeted Violence:</strong> Often focus on specific groups or public places to create disruption and media impact.</li>
        <li><strong>Symbolic Targeting:</strong> Attacks on culturally significant sites, government institutions, etc.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>3. Types of Terrorist Attacks</h2>
      <img src={impactImage} alt="Impact of Terrorist Attacks" className="section-image" />
      <ul>
        <li><strong>Bombings:</strong> Common tactic to inflict mass casualties.</li>
        <li><strong>Cyberterrorism:</strong> Attacks on digital infrastructure to disrupt systems.</li>
        <li><strong>Biological and Chemical Attacks:</strong> Use of toxins, viruses, or chemical agents to cause widespread impact.</li>
        <li><strong>Hostage-Taking:</strong> Capturing individuals to negotiate or gain media coverage.</li>
        <li><strong>Vehicle Ramming Attacks:</strong> Using vehicles to target crowds or gatherings.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>4. Impact of Terrorist Attacks</h2>
      <img src={responseImage} alt="Response Steps" className="section-image" />
      <p>
        Terrorist attacks have profound effects on society, including:
      </p>
      <ul>
        <li><strong>Human Casualties:</strong> Loss of life and injuries with long-term physical and psychological impacts.</li>
        <li><strong>Economic Loss:</strong> Financial losses due to property damage and business disruption.</li>
        <li><strong>Psychological and Social Impact:</strong> Fear and anxiety leading to reduced social cohesion.</li>
        <li><strong>Political Response:</strong> Governments may implement stricter security measures and surveillance.</li>
        <li><strong>Environmental Damage:</strong> Certain attacks can release toxic substances into the environment.</li>
      </ul>
    </div>

    <div className="content-section">
      <h2>5. Preventative Measures and Anti-Terrorism Strategies</h2>
      <ul>
        <li><strong>Surveillance and Intelligence Gathering:</strong> Monitoring channels and tracking potential threats.</li>
        <li><strong>Counter-Terrorism Training:</strong> Preparing law enforcement and public sector workers for terrorist incidents.</li>
        <li><strong>Strengthening Cybersecurity:</strong> Essential to prevent cyberterrorism.</li>
        <li><strong>International Collaboration:</strong> Cross-border intelligence sharing to track and disrupt terrorist activities.</li>
        <li><strong>Community Engagement:</strong> Preventing radicalization through public awareness campaigns and social initiatives.</li>
      </ul>
    </div>

    <div className="download-section">
      <a href={pdfTerroristAttacks} download="Terrorist_Attacks.pdf" className="download-btn">Download PDF</a>
    </div>
  </div>
);

export default TerroristAttacks;
