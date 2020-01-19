import http from "@/utils/axios/axios";
import {PlanetFactory} from "@/services/api/planets/factories/PlanetFactory";
import {ResourceBuildingFactory} from "@/services/api/planets/factories/ResourceBuildingFactory";
import {FacilityFactory} from "@/services/api/planets/factories/FacilityFactory";
import {DefenceFactory} from "@/services/api/planets/factories/DefenceFactory";
import {ShipFactory} from "@/services/api/planets/factories/ShipFactory";
import {ResourceFactory} from "@/services/api/planets/factories/ResourceFactory";
import {ConstructionActivityFactory} from "@/services/api/planets/factories/ConstructionActivityFactory";
import {ResponseFactory} from "@/services/api/utils/factories/ResponseFactory";

export default {
  async getPlanets() {
    const response = await http.get("/bot/planets");
    const parsedResponse = ResponseFactory(response);
    const fetchedPlanets = parsedResponse.result;

    const parsedPlanets = fetchedPlanets.map((planet) => PlanetFactory(planet))

    return parsedPlanets;
  },
  async getPlanet(id) {
    const response = await http.get("/bot/planets/" + id);
    const parsedResponse = ResponseFactory(response);
    const fetchedPlanet = parsedResponse.result

    const parsedPlanet = PlanetFactory(fetchedPlanet);

    return parsedPlanet;
  },
  async getPlanetResources(id) {
    const response = await http.get("/bot/planets/" + id + "/resources");
    const parsedResponse = ResponseFactory(response);
    const fetchedPlanetResources = parsedResponse.result

    const parsedPlanetResources = ResourceFactory(fetchedPlanetResources);

    return parsedPlanetResources;
  },
  async getPlanetResourcesBuildings(id) {
    const response = await http.get("/bot/planets/" + id + "/resources-buildings");
    const parsedResponse = ResponseFactory(response);
    const fetchedPlanetResourcesBuildings = parsedResponse.result

    const parsedPlanetResourcesBuildings = ResourceBuildingFactory(fetchedPlanetResourcesBuildings);

    return parsedPlanetResourcesBuildings;
  },
  async getPlanetFacilities(id) {
    const response = await http.get("/bot/planets/" + id + "/facilities")
    const parsedResponse = ResponseFactory(response);
    const fetchedPlanetFacilities = parsedResponse.result

    const parsedPlanetFacilities = FacilityFactory(fetchedPlanetFacilities);

    return parsedPlanetFacilities;
  },
  async getPlanetDefence(id) {
    const response = await http.get('/bot/planets/' + id + "/defence")
    const parsedResponse = ResponseFactory(response);
    const fetchedPlanetDefence = parsedResponse.result

    const parsedPlanetDefence = DefenceFactory(fetchedPlanetDefence);

    return parsedPlanetDefence;
  },
  async getPlanetShips(id) {
    const response = await http.get('/bot/planets/' + id + "/ships")
    const parsedResponse = ResponseFactory(response);
    const fetchedPlanetShips = parsedResponse.result

    const parsedPlanetShips = ShipFactory(fetchedPlanetShips);

    return parsedPlanetShips;
  },
  async getPlanetConstructionActivities(id) {
    const response = await http.get('/bot/planets/' + id + '/constructions')
    const parsedResponse = ResponseFactory(response);
    const fetchedPlanetConstructionActivities = parsedResponse.result

    const parsedPlanetConstructionActivities = ConstructionActivityFactory(fetchedPlanetConstructionActivities);

    return parsedPlanetConstructionActivities;
  }
}
