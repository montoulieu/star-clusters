<template>
  <div>
    <login-form/>
    {{ env }}
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm'

export default {
  components: {
    LoginForm
  },
  computed: {
    env: function () {
      return process.env.GITHUB_CLIENT_SECRET
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'login vertical-center'
      }
    }
  }
}
</script>

<style>

</style>
