<template>
  <div>
    <nav><h2>Modal default</h2></nav>
    <div class="p-5">
      <h2>Modal Design</h2>
      <div class="row">
        <div class="col">
          <md-button class="md-primary" @click="show"> Show</md-button>
        </div>
      </div>
      <modal name="hello-world">
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h4 class="title">Header</h4>
          </md-card-header>
          <md-card-content>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
