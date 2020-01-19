import PlanetService from "@/services/api/planets/PlanetService";

export default {
  async getPlanets({ commit }) {
    const fetchedPlanets = await PlanetService.getPlanets();

    commit('SET_PLANETS', fetchedPlanets);
  }
}
