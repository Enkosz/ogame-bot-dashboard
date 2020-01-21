<template>
  <planets-table :loading="loading" :planets="planets" @reload="handleReload"/>
</template>

<script>
  import PlanetsTable from "@/features/planets/PlanetsTable";
  import { mapActions } from 'vuex'

    export default {
        name: "Planets",
        data() {
          return {
            loading: false,
            planets: []
          }
        },
        components: {
          PlanetsTable
        },
        methods: {
          ...mapActions({
            fetchPlanets: 'planetModule/fetchPlanets'
          }),
          getPlanets() {
            this.loading = true;

            return new Promise((resolve, reject) => {
              this.fetchPlanets().then((planets) => {
                this.loading = false;
                this.planets = planets;

                return resolve(planets)
              }).catch((error) => {
                return reject(error)
              })
            })
          },
          handleReload() {
            this.getPlanets();
          }
        },
        created() {
          this.getPlanets();
        },
    }
</script>
