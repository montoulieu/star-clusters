<template>
  <div class="text-center">
    <h1 class="display-3 font-weight-normal mb-3">Star Clusters for GitHub</h1>
    <h2 class="h1 font-weight-light mb-5">A simple way to organize and share your Github stars</h2>
    <button class="btn btn-outline-primary btn-lg" @click="login"><span v-html="iconGithub.toSVG()"></span>Login with GitHub</button>
  </div>
</template>

<script>
import octicons from 'octicons'

export default {
  computed: {
    iconGithub: function () {
      return octicons['mark-github']
    }
  },
  methods: {
    login: function () {
      this.$auth.loginWith('github')
    }
  }
}
</script>
