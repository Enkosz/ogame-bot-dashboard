<template>
  <vs-table :data="buildings">
    <template slot="thead">
      <vs-th>
        Type
      </vs-th>
      <vs-th>
        Name
      </vs-th>
      <vs-th>
        Level
      </vs-th>
    </template>

    <template slot-scope="{data}">
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
  </vs-table>
</template>

<script>
    export default {
        name: "PlanetOverviewResourcesBuilding",
        props: {
          buildings: {
            type: Array,
            required: true
          }
        }
    }
</script>
