<template>
  <section>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <p>
            <router-link class="name-logo" :to="{ name: 'HomePage' }">Sean <strong>Siggard</strong></router-link>
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
            <router-link class="button is-primary" :to="{ name: 'ProjectsPage' }"><strong>Projects</strong></router-link>
            <router-link class="button is-light" :to="{ name: 'ResumePage' }">Resume</router-link>
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
