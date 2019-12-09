<template>
  <div>
    <nav><h2>Checkbox</h2></nav>
    <div class="row p-5">
      <div class="col">
        <md-checkbox class="md-primary" v-model="boolean">Item</md-checkbox>
        <md-checkbox class="md-primary" v-model="boolean">Item</md-checkbox>
        <md-checkbox class="md-primary" v-model="boolean">Item</md-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boolean: true
    };
  }
};
</script>

<style></style>
