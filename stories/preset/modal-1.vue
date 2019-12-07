<template>
  <div>
    <nav><h2>Modal with Input</h2></nav>
    <div class="p-5">
      <h2>Modal Design</h2>
      <div class="row">
        <div class="col">
          <md-button class="md-primary" @click="show"> Show</md-button>
        </div>
      </div>
      <modal name="hello-world" scrollable="true" height="auto">
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Header</h4>
          </md-card-header>
          <md-card-content>
            <md-field>
              <label>label</label>
              <md-input v-model="mode" type="text"></md-input>
            </md-field>
            <md-field>
              <label>label</label>
              <md-input v-model="mode" type="email"></md-input>
            </md-field>
            <md-field>
              <label>label</label>
              <md-input v-model="mode" type="number"></md-input>
            </md-field>
            <md-field>
              <label>label</label>
              <md-input v-model="mode" type="password"></md-input>
            </md-field>
          </md-card-content>
        </md-card>
      </modal>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
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

<style></style>
