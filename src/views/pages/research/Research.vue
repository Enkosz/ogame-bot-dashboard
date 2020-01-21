<template>
  <research-table :loading="loading" :research="research" @reload="handleReload"/>
</template>

<script>
    import ResearchTable from "@/features/research/ResearchTable";
    import ResearchService from "@/services/api/research/ResearchService";

    export default {
        name: "Research",
        components: {
          ResearchTable
        },
        data() {
          return {
            loading: false,
            research: []
          }
        },
        methods: {
          getResearch() {
            this.loading = true;

            return new Promise((resolve, reject) => {
              ResearchService.getResearch().then((research) => {
                this.loading = false;
                this.research = research;

                return resolve(research)
              }).catch((error) => {
                return reject(error)
              })
            })
          },
          handleReload() {
            this.getResearch();
          }
        },
        created() {
          this.getResearch();
        },
    }
</script>
