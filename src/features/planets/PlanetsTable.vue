<template>
  <main-table :data="planets" @reload="$emit('reload')" :loading="loading">
    <template slot="tableHead">
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

    <template slot="tableBody" slot-scope="{data}">
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
  </main-table>
</template>

<script>
    import MainTable from "@/layouts/ui/MainTable";

    export default {
        name: "PlanetsTable",
        components: {
          MainTable
        },
        props: {
            planets: {
              type: Array,
              required: true
            },
            loading: {
              type: Boolean,
              default: false,
              required: false
            }
          },
    }
</script>
