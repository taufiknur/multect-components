<template>
  <div>
    <nav><h2>Notification Design</h2></nav>
    <div class="p-5">
      <h4 class="text-center p-3">Notification Top</h4>
      <div class="row text-center">
        <div class="col">
          <md-button class="md-primary" @click="primary_top">
            Show left top</md-button
          >
          <notifications group="foo" position="top left" />
        </div>
        <div class="col">
          <md-button class="md-warning" @click="warning_top">
            Show Center top</md-button
          >
          <notifications group="foo1" position="top center" />
        </div>
        <div class="col">
          <md-button class="md-danger" @click="danger_top">
            Show Right top</md-button
          >
          <notifications group="foo2" position="top right" />
        </div>
      </div>
      <hr />
      <h4 class="text-center p-3">Notification Bottom</h4>
      <div class="row text-center">
        <div class="col">
          <md-button class="md-primary" @click="primary_bottom">
            Show Left bottom</md-button
          >
          <notifications group="fooo" position="bottom left" />
        </div>
        <div class="col">
          <md-button class="md-warning" @click="warning_bottom">
            Show Center bottom</md-button
          >
          <notifications group="fooo1" position="bottom center" />
        </div>
        <div class="col">
          <md-button class="md-danger" @click="danger_bottom">
            Show Right bottom</md-button
          >
          <notifications group="fooo2" position="bottom right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    primary_top() {
      this.$notify({
        group: "foo",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    },
    warning_top() {
      this.$notify({
        group: "foo1",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    },
    danger_top() {
      this.$notify({
        group: "foo2",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    },
    primary_bottom() {
      this.$notify({
        group: "fooo",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    },
    warning_bottom() {
      this.$notify({
        group: "fooo1",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    },
    danger_bottom() {
      this.$notify({
        group: "fooo2",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    }
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "blue"
    }
  }
};
</script>

<style>
nav {
  background: #d3edf4;
  padding: 1.5rem 1.25rem;
}
h2 {
  font-size: 20px !important;
  line-height: 24px;
  line-height: 2rem;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
}
</style>
