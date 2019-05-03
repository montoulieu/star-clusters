<template>
    <div class="main" :class="{'clusterbar-open': getSidebarOpen}">
      <div class="clusterbar">
        <header class="sidebar-header bg-dark position-sticky mb-5">
          <b-row class="border-bottom pb-5">
            <b-col class="col-md-3">
              <div class="toolbar d-flex align-items-start">
                <h3 class="font-weight-light mb-3 mr-auto">Add Cluster</h3>
                <button @click="closeSidebar" class="btn btn-sm btn-outline-primary btn-close"><span v-html="iconClose.toSVG()"></span></button>
              </div>
              <form action="" class="mb-3">
                <input type="text" class="form-control mb-3" placeholder="Cluster Name">
                <textarea class="form-control"  placeholder="Cluster Description"></textarea>
              </form>
            </b-col>
            <b-col>
              <ul class="list-unstyled star-cluster star-container rounded h-100">

              </ul>
            </b-col>
          </b-row>
        </header>
      </div>
      <div class="your-stars">
        <h1 class="h2 font-weight-light mb-3">Your Stars</h1>
        <ul class="list-unstyled star-container">
          <li class="lone-star card bg-dark border" v-for="star in stars" :key="star.id">
            <div class="card-body p-3 d-flex align-items-center">
              <div v-if="star.language" class="repo-language badge" :class="languageFormat(star.language)">{{ star.language }}</div>
              <div class="repo-info mr-2 d-flex align-items-center">
                <a :href="star.owner.html_url" target="_blank">
                  <img :src="star.owner.avatar_url" height="40px" class="border bg-light rounded-circle mr-3" v-b-tooltip.hover :title="star.owner.login">
                </a>
                <div class="repo-text">
                  <a :href="star.html_url" target="_blank">{{ star.name }}</a>
                  <p v-if="star.description" class="description small font-weight-light mb-0">{{ star.description.substring(0, 90) }}{{star.description.length > 90 ? '...' : ''}}</p>
                </div>
              </div>
              <div class="badge-group badge ml-auto d-flex">
                <span class="font-weight-normal mr-2"><span v-html="iconStar.toSVG()"></span> {{star.stargazers_count}}</span>
                <span class="font-weight-normal"><span v-html="iconFork.toSVG()"></span> {{star.forks}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import octicons from 'octicons'

export default {
  components: {
  },
  computed: {
    ...mapGetters([
      'getSidebarOpen',
    ]),
    stars : function () {
      return this.$store.state.stars
    },
    userName: function () {
      return this.$auth.user.login
    },
    iconFork: function () {
      return octicons['repo-forked']
    },
    iconStar: function () {
      return octicons['star']
    },
    iconPlus: function () {
      return octicons['plus']
    },
    iconClose: function () {
      return octicons['x']
    }
  },
  methods: {
    fetchStars: function (user) {
      this.$store.dispatch('fetchStars', user)
    },
    languageFormat: function (string) {
      if (string != null)
        return 'lang-' + string.toLowerCase()
    },
    ...mapActions([
      'closeSidebar'
    ])
  },
  mounted() {
    this.fetchStars(this.userName)
    console.log(octicons);

    // droppable.on('droppable:dropped', () => console.log('droppable:dropped'))
    // droppable.on('droppable:returned', () => console.log('droppable:returned'))
  }
}
</script>
