<template>
  <vs-card v-if="planet">
    <div slot="header">
      <vs-tabs>
        <vs-tab label="Overview">
          <planet-overview :resources="resources"/>
        </vs-tab>
        <vs-tab label="Buildings">
          <planet-overview-buildings :buildings="buildings"/>
        </vs-tab>
        <vs-tab label="Defenses">
          <planet-overview-defence :defence="defence"/>
        </vs-tab>
        <vs-tab label="Ships">
          <planet-overview-ships :ships="ships"/>
        </vs-tab>
        <vs-tab label="Constructions">
          <planet-overview-constructions :id="1"/>
        </vs-tab>
      </vs-tabs>
    </div>
  </vs-card>
</template>

<script>
  import PlanetService from "@/services/api/planets/PlanetService";
  import PlanetOverview from "@/features/planets/overview/PlanetOverview";
  import PlanetOverviewBuildings from "@/features/planets/overview/PlanetOverviewBuildings";
  import PlanetOverviewDefence from "@/features/planets/overview/PlanetOverviewDefence";
  import PlanetOverviewShips from "@/features/planets/overview/PlanetOverviewShips";
  import PlanetOverviewConstructions from "@/features/planets/overview/PlanetOverviewConstructions";


    export default {
        name: "Planet",
        components: {
          PlanetOverview,
          PlanetOverviewBuildings,
          PlanetOverviewDefence,
          PlanetOverviewShips,
          PlanetOverviewConstructions
        },
        data() {
          return {
            planet: null,
            resources: [],
            buildings: [],
            defence: [],
            ships: [],
            buildingConstruction: {},
            research: {}
          }
        },
        created() {
          const planetId = this.$route.params.id;

          PlanetService.getPlanetResources(planetId).then((planetResources) => {
            this.resources = planetResources
          })

          PlanetService.getPlanet(planetId).then((planet) => {
            this.planet = planet
            PlanetService.getPlanetResourcesBuildings(planetId).then((planetResourcesBuildings) => {
              this.buildings = planetResourcesBuildings;

              PlanetService.getPlanetFacilities(planetId).then((planetFacilities) => {
                this.buildings = [
                  ...this.buildings,
                  ...planetFacilities
                ]
              })

              PlanetService.getPlanetDefence(planetId).then((planetDefence) => {
                this.defence = planetDefence;
              })

              PlanetService.getPlanetShips(planetId).then((planetShips) => {
                this.ships = planetShips;
              })

              PlanetService.getPlanetConstructionActivities(planetId).then((planetConstructionActivites) => {
                console.log(planetConstructionActivites)
              })
            })
          })
        }
    }
</script>
