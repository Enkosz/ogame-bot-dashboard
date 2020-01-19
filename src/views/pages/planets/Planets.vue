<template>
  <planets-table :planets="getPlanets"></planets-table>
</template>

<script>
  import PlanetsTable from "@/features/planets/PlanetsTable";

    export default {
        name: "Planets",
      components: {
        PlanetsTable
      },
        created() {
          this.$store.dispatch('planetModule/getPlanets');
        },
        computed: {
          getPlanets() {
            return this.$store.state.planetModule.planets
          }
        }
    }
</script>
