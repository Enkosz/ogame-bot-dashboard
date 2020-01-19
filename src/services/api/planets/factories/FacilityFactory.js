export const FacilityFactory = (facility) => {
  const parsedFacilities = {
    roboticsFactory: facility.RoboticsFactory,
    shipyard: facility.Shipyard,
    researchLab: facility.ResearchLab,
    allianceDepot: facility.AllianceDepot,
    missileSilo: facility.MissileSilo,
    naniteFactory: facility.NaniteFactory,
    terraformer: facility.Terraformer,
    spaceDock: facility.SpaceDock,
  }

  const transformedFacilities = Object.keys(parsedFacilities).map((facility) => {
    return {
      type: 'facility',
      name: facility,
      level: parsedFacilities[facility]
    }
  })

  return transformedFacilities;
}
