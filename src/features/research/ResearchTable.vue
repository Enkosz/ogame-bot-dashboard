<template>
  <main-table :data="research" @reload="$emit('reload')" :loading="loading">
    <template slot="tableHead">
      <vs-th>
        ID
      </vs-th>
      <vs-th>
        Name
      </vs-th>
      <vs-th>
        Level
      </vs-th>
    </template>

    <template slot="tableBody" slot-scope="{data}">
      <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
        <vs-td :data="data[indextr].type">
          {{data[indextr].type}}
        </vs-td>

        <vs-td :data="data[indextr].name">
          {{data[indextr].name}}
        </vs-td>

        <vs-td :data="data[indextr].level">
          {{data[indextr].level}}
        </vs-td>
      </vs-tr>
    </template>
  </main-table>
</template>

<script>
    import MainTable from "@/layouts/ui/MainTable";

    export default {
        name: "ResearchTable",
        components: {
          MainTable
        },
        props: {
          research: {
            type: Array,
            required: true
          },
          loading: {
            type: Boolean,
            required: true
          }
        }
    }
</script>

<style scoped>

</style>
