<template>
  <div>
    <NavBar></NavBar>
    <div class="container is-fullhd boxes">
      <div class="columns is-multiline">
        <div class="column is-3">
          <Box></Box>
        </div>
        <div class="column is-3">
          <Box></Box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['darkTextColor']
}
</script>
<style>
.boxes {
  margin-top: 15%;
}
</style>
