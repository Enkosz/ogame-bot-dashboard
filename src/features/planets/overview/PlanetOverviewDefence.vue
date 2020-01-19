<template>
  <vs-table :data="defence">
    <template slot="thead">
      <vs-th>
        Type
      </vs-th>
      <vs-th>
        Name
      </vs-th>
      <vs-th>
        Count
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

        <vs-td :data="data[indextr].count">
          {{data[indextr].count}}
        </vs-td>

      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
    export default {
        name: "PlanetOverviewDefence",
        props: {
          defence: {
            type: Array,
            required: true
          }
        }
    }
</script>
