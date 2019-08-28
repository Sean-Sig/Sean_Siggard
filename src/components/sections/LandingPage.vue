<template>
  <section>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <p class="name-logo">
            Sean Siggard
          </p>
        </div>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Work</strong>
            </a>
            <a class="button is-light">
              resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
      return {
      }
  }
}
</script>
<style>
.navbar {
  background-color: grey;
}
.name-logo {
  font-size: 32pt;
  color: white;
}
</style>
