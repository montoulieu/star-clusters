<template>
  <div>
    <the-nav v-if="isLoggedIn"/>
    <b-container>
      <nuxt/>
    </b-container>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  components: {
    TheNav
  },
  computed: {
    isLoggedIn: function () {
      return this.$auth.loggedIn
    }
  }
}
</script>
