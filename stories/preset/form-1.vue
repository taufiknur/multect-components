<template>
  <div>
    <nav><h2>Form with Style</h2></nav>
    <div class="p-5">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      mode: ""
    }
  }
};
</script>

<style></style>
