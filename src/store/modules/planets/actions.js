import PlanetService from "@/services/api/planets/PlanetService";

export default {
  async fetchPlanets() {
    const fetchedPlanets = await PlanetService.getPlanets();

    return fetchedPlanets;
  }
}
