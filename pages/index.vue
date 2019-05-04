<template>
    <div class="main" :class="{'clusterbar-open': getSidebarOpen}">
      <cluster-bar/>
      <div class="your-stars">
        <h1 class="h2 font-weight-light mb-3">Your Stars</h1>
        <ul class="list-unstyled star-container">
          <li class="lone-star card bg-dark border" v-for="star in stars" :key="star.id" data-index="star.id">
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
              <span class="svg-fill-primary ml-auto" v-html="iconBars.toSVG()"></span>
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
import ClusterBar from '@/components/ClusterBar';
import octicons from 'octicons'

export default {
  components: {
    ClusterBar
  },
  computed: {
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
    iconBars: function () {
      return octicons['three-bars']
    }
  },
  methods: {
    fetchStars: function (user) {
      this.$store.dispatch('fetchStars', user)
    },
    languageFormat: function (string) {
      if (string != null){
        return 'lang-' + string
          .toLowerCase()
          .replace(new RegExp(' ', 'g'), '-')
          .replace(new RegExp('#', 'g'),'-sharp')
          .replace(new RegExp('\\+', 'g'),'-plus')
      }
    },
  },
  mounted() {
    this.fetchStars(this.userName)
  }
}
</script>
