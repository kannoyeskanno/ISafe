import React from 'react';
import { useParams } from 'react-router-dom';
import IndustrialFire from './Fire/IndustrialFire/IndustrialFire';
import ElectricalFire from './Fire/ElectricalFire/ElectricalFire';
import HouseFire from './Fire/HouseFire/HouseFire';
import VehicleFire from './Fire/VehicleFire/VehicleFire';
import ForestFire from './Fire/ForestFire/ForestFire';
import ShipFire from './Fire/ShipFire/ShipFire';

import DamFailure from './Flood/DamFailure/DamFailure';
import UrbanFlooding from './Flood/UrbanFlooding/UrbanFlooding';
import RiverFlooding from './Flood/RiverFlooding/RiverFlooding';
import FlashFlood from './Flood/FlashFlood/FlashFlood';
import CoastalFlooding from './Flood/CoastalFlooding/CoastalFlooding';
import SnowmeltFlooding from './Flood/SnowmeltFlooding/SnowmeltFlooding';

import ElectricalShock from './Electrical/ElectricalShock/ElectricalShock';
import ElectricalOverloading from './Electrical/ElectricalOverloading/ElectricalOverloading';
import FaultyWiring from './Electrical/FaultyWiring/FaultyWiring';
import LightningStrike from './Electrical/LightningStrike/LightningStrike';
import ShortCircuit from "./Electrical/ShortCircuit/ShortCircuit";

import ChemicalSpill from "./ManMade/ChemicalSpill/ChemicalSpill";
import Deforestation from "./ManMade/Deforestation/Deforestation";
import IndustrialExplosion from "./ManMade/IndustrialExplosion/IndustrialExplosion";
import NuclearAccidents from "./ManMade/NuclearAccidents/NuclearAccidents";
import OilSpill from "./ManMade/OilSpill/OilSpill";
import TerroristAttack from "./ManMade/TerroristAttacks/TerroristAttacks";

const PageHolder = () => {
  const { id } = useParams();

  switch (id) {
    case 'IndustrialFire':
      return <IndustrialFire />;
    case 'ElectricalFire':
      return <ElectricalFire />;
    case 'HouseFire':
      return <HouseFire />;
    case 'VehicleFire':
      return <VehicleFire />;
    case 'ForestFire':
      return <ForestFire />;
    case 'ShipFire':
      return <ShipFire />;

    case 'DamFailure':
      return <DamFailure />;
    case 'UrbanFlooding':
      return <UrbanFlooding />;
    case 'RiverFlooding':
      return <RiverFlooding />;
    case 'FlashFlood':
      return <FlashFlood />;
    case 'CoastalFlooding':
      return <CoastalFlooding />;
    case 'SnowmeltFlooding':
      return <SnowmeltFlooding />;


    case 'ElectricalShock':
      return <ElectricalShock />

    case 'Overloading':
      return <ElectricalOverloading />

    case 'FaultyWiring':
      return <FaultyWiring />

    case 'LightningStrike':
      return <LightningStrike />

    case 'ShortCircuit':
      return <ShortCircuit />

    case 'ChemicalSpill':
      return <ChemicalSpill />;
    case 'Deforestation':
      return <Deforestation />;
    case 'IndustrialExplosion':
      return <IndustrialExplosion />;
    case 'NuclearAccident':
      return <NuclearAccidents />;
    case 'OilSpill':
      return <OilSpill />;
    case 'TerroristAttack':
      return <TerroristAttack />;



    default:
      return <p>Information not found for ID: {id}</p>;
  }
};

export default PageHolder;
