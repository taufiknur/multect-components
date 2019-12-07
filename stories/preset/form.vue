<template>
  <div>
    <nav><h2>Form default</h2></nav>
    <form class="p-5">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="fname" />
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lname" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
