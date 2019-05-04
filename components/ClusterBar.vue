<template>
  <div class="clusterbar bg-dark">
    <b-row class="border-bottom pb-4">
      <b-col md="3" order-md="2">
        <div class="toolbar-header d-flex align-items-start">
          <h3 class="font-weight-light mb-3 mr-auto">Add Cluster</h3>
          <button @click="closeSidebar" class="btn btn-sm btn-outline-primary btn-close"><span v-html="iconClose.toSVG()"></span></button>
        </div>
        <form action="" class="mb-3">
          <input type="text" class="form-control mb-3" placeholder="Cluster Name">
          <textarea class="form-control"  placeholder="Cluster Description"></textarea>
        </form>
        <div class="toolbar-footer text-right">
          <button class="btn btn-outline-primary">Save</button>
        </div>
      </b-col>
      <b-col>
        <ul class="list-unstyled star-cluster star-container rounded h-100"></ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import octicons from 'octicons'
import { mapActions } from 'vuex'

export default {
  computed: {
    iconClose: function () {
      return octicons['x']
    }
  },
  methods: {
    ...mapActions([
      'closeSidebar'
    ])
  }
}
</script>

<style>

</style>
