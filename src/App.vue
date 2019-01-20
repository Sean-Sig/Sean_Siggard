<template>
  <div id="app">
    <LandingPage></LandingPage>
    <ExerciseTable></ExerciseTable>
  </div>
</template>

<script>
import Color from 'color-js'

export default {
  name: 'app',
  data () {
    return {
      backgroundColor: new Color('#504453').toRGB(),
      showMenu: false,
      scrolled: false
    }
  },
  computed: {
    darkTextColor () {
      return {
        color: this.backgroundColor
      }
    },
    darkBackgroundColor () {
      return {
        backgroundColor : this.backgroundColor
      }
    }
  },
  methods: {
    createCallback (request, context) {
      return function change () {
        if (request.status === 200 && request.readyState === 4) {
          const response = JSON.parse(request.responseText)
          context.imageURL = response.logoURL
          context.backgroundColor = new Color(response.mainColor).toRGB()
          context.accentColor = response.accentColor
        } else if (request.status !== 200 && request.readyState === 4) {
          // eslint-disable-next-line
          console.log('REQUEST FAILED')
        }
      }
    },
    handleMenu () {
      this.showMenu = !this.showMenu
    },
    handleScroll () {
      if (window.innerWidth > 1087) {
          this.scrolled = window.scrollY > window.innerHeight - 35
      } else {
        var element = document.getElementById('mobile-accounting-system')
        var distanceToTop = element.getBoundingClientRect().top
        if (distanceToTop <= 25){
          this.scrolled = true
        } else{
          this.scrolled = false
        }
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

:root {
  --primary: #504453;
}

// Set your colors
$primary: #504453;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': ($white, $black),
  'black': ($black, $white),
  'light': ($light, $light-invert),
  'dark': ($dark, $dark-invert),
  'primary': ($primary, $primary-invert),
  'info': ($info, $info-invert),
  'success': ($success, $success-invert),
  'warning': ($warning, $warning-invert),
  'danger': ($danger, $danger-invert),
  'twitter': ($twitter, $twitter-invert)
);
// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';


</style>
