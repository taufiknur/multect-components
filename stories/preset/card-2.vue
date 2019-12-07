<template>
  <div>
    <nav><h2>Card Large Size</h2></nav>
    <div class="p-5">
      <md-card>
        <md-card-header :data-background-color="dataBackgroundColor">
          <h4 class="title">Header</h4>
        </md-card-header>
        <md-card-content>
          <p>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: "blue"
    }
  }
};
</script>

<style></style>
