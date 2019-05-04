<template>
  <div>
    <b-navbar toggleable="lg" type="dark" fixed="top" variant="dark" class="shadow-sm">
        <b-navbar-brand href="#" class="font-italic">Star Clusters</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="newCluster">Create Cluster</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <img :src="avatarUrl" class="avatar-photo mr-3">
                <span class="mr-2">{{ userName }}</span>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from 'axios'
import octicons from 'octicons'

export default {
  computed: {
    userName: function () {
      return this.$auth.user.login
    },
    avatarUrl: function () {
      return this.$auth.user.avatar_url
    }
  },
  methods: {
    logout: function () {
      this.$auth.logout()
      this.$router.push('/login')
    },
    newCluster: function () {
      this.$store.dispatch('createNewCluster')
    }
  }
}
</script>
