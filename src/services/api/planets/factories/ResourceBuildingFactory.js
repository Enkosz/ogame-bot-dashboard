export const ResourceBuildingFactory = (resourceBuilding) => {
  const parsedResourcesBuilding = {
    metalMine: resourceBuilding.MetalMine,
    crystalMine: resourceBuilding.CrystalMine,
    deuteriumSynthesizer: resourceBuilding.DeuteriumSynthesizer,
    solarPlant: resourceBuilding.SolarPlant,
    fusionReactor: resourceBuilding.FusionReactor,
    solarSatellite: resourceBuilding.SolarSatellite,
    metalStorage: resourceBuilding.MetalStorage,
    crystalStorage: resourceBuilding.CrystalStorage,
    deuteriumTank: resourceBuilding.DeuteriumTank
  }

  const transformedResourcesBuildings = Object.keys(parsedResourcesBuilding).map((resourceBuilding) => {
    return {
      type: 'resource-building',
      name: resourceBuilding,
      level: parsedResourcesBuilding[resourceBuilding]
    }
  })

  return transformedResourcesBuildings
}
