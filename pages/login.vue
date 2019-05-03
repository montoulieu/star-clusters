<template>
  <div>
    <login-form/>
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm'

export default {
  components: {
    LoginForm
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
