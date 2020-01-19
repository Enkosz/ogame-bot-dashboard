<template>
  <vs-table :data="planets">
    <template slot="thead">
      <vs-th>
        ID
      </vs-th>
      <vs-th>
        Name
      </vs-th>
      <vs-th>
        Actions
      </vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
        <vs-td :data="data[indextr].id">
          {{data[indextr].id}}
        </vs-td>

        <vs-td :data="data[indextr].name">
          {{data[indextr].name}}
        </vs-td>

        <vs-td :data="data[indextr].id">
          <vs-button color="primary" type="flat" :to="'/planets/' + data[indextr].id">View</vs-button>
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
    export default {
        name: "PlanetsTable",
        props: {
          planets: {
            type: Array,
            required: true
          }
        }
    }
</script>
