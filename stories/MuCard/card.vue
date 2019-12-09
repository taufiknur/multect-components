<template>
  <div>
    <nav><h2>Card default</h2></nav>
    <div class="p-5">
      <div class="card-left">
        <div class="md-layout-item">
          <md-card>
            <md-card-header data-background-color="blue">
              <h4 class="title"><b>Header</b></h4>
            </md-card-header>
            <md-card-content>
              <md-checkbox class="md-primary" v-model="boolean"
                >Item</md-checkbox
              >
              <md-checkbox class="md-primary" v-model="boolean"
                >Item</md-checkbox
              >
              <md-checkbox class="md-primary" v-model="boolean"
                >Item</md-checkbox
              >
            </md-card-content>
          </md-card>
        </div>
      </div>
      <div class="row p-5"></div>
    </div>
  </div>
</template>

<script>
// import {
//   StatsCard,
//   ChartCard,
//   NavTabsCard,
//   NavTabsTable,
//   OrderedTable
// } from "./components";

export default {
  data() {
    return {
      boolean: true
    };
  },
  // components: {
  //   StatsCard,
  //   ChartCard,
  //   NavTabsCard,
  //   NavTabsTable,
  //   OrderedTable
  // },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "blue"
    }
  }
};
</script>

<style scope>
.card-left {
  position: absolute;
  margin: 0 auto;
  /* top: 15%; */
  left: 15px;
}

</style>
