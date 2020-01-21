<template>
  <div :id="getTableHtmlId" class="vs-con-loading__container">
    <vs-table :data="data">

      <!-- Table Header -->
      <template slot="header">
        <div class="py-3 w-full flex flex-row justify-end">
          <vs-button class="mx-2" size="small" icon="refresh" color="primary" @click="handleReloadEvent"/>
        </div>
      </template>

      <!-- Table Head -->
      <template slot="thead">
        <slot name="tableHead" />
      </template>

      <!-- Table Body -->
      <template slot-scope="{ data }">
        <slot :data="data" name="tableBody" />
      </template>

    </vs-table>
  </div>
</template>

<script>
    export default {
        name: "MainTable",
        props: {
          data: {
            type: Array,
            required: true
          },
          loading: {
            type: Boolean,
            default: false,
            required: false
          }
        },
        computed: {
          getTableHtmlId() {
            const componentId = this._uid;

            return `main-table-${componentId}`
          }
        },
        methods: {
          handleReloadEvent() {
            this.$emit('reload')
          },
          openLoading() {
            this.$vs.loading({
              container: `#${this.getTableHtmlId}`
            })
          },
          closeLoading() {
            this.$vs.loading.close(`#${this.getTableHtmlId} > .con-vs-loading`)
          }
        },
        watch: {
          loading: function (loading) {
            if (!loading) {
              this.closeLoading()
            } else {
              this.openLoading()
            }
          }
        },
        mounted() {
          if (this.loading) {
            this.openLoading()
          }

        }
    }
</script>
