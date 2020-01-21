export const ResearchFactory = (research) => {
  const parsedResearch = {
    energyTechnology: research.EnergyTechnology,
    laserTechnology: research.LaserTechnology,
    ionTechnology: research.IonTechnology,
    hyperspaceTechnology: research.HyperspaceTechnology,
    plasmaTechnology: research.PlasmaTechnology,
    combustionDrive: research.CombustionDrive,
    impulseDrive: research.ImpulseDrive,
    hyperspaceDrive: research.HyperspaceDrive,
    espionageTechnology: research.EspionageTechnology,
    computerTechnology: research.ComputerTechnology,
    astrophysics: research.Astrophysics,
    intergalacticResearchNetwork: research.IntergalacticResearchNetwork,
    gravitonTechnology: research.GravitonTechnology,
    weaponsTechnology: research.WeaponsTechnology,
    shieldingTechnology: research.ShieldingTechnology,
    armourTechnology: research.ArmourTechnology,
  }

  const transformedResearch = Object.keys(parsedResearch).map((research) => {
    return {
      type: 'research',
      name: research,
      level: parsedResearch[research]
    }
  })

  return transformedResearch
}
