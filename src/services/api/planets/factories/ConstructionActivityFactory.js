export const ConstructionActivityFactory = (constructionActivity) => {
  return {
    buildingId: constructionActivity.BuildingID,
    buildingCountdown: constructionActivity.BuildingCountdown,
    researchID: constructionActivity.ResearchID,
    researchCountdown: constructionActivity.ResearchCountdown,
  }
}
