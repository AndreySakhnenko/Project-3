<template>
  <div class="film_container container" v-if="oneFilm">
    <h2 class="film_title">{{ oneFilm.title }}</h2>
    <div class="film_content">
      <div class="film_image">
        <img :src="ima(oneFilm.poster_path)" />
      </div>
      <div class="film_description">
        <p class="film_description__text">
          Release date:<span>{{ oneFilm.release_date }}</span>
        </p>
        <p class="film_description__text">
          Tagline:<span>{{ oneFilm.tagline }}</span>
        </p>
        <p class="film_description__text">
          Countri:<span>{{ oneFilm.production_countries[0].name }}</span>
        </p>
        <p class="film_description__text">
          Runtime:<span>{{ oneFilm.runtime }}min</span>
        </p>
        <p class="film_description__text">
          Жанр:<span>{{ oneFilm.genres[0].name }}</span>
        </p>
        <p class="film_description__text">
          Budget:<span>{{ oneFilm.budget }}$</span>
        </p>
        <p class="film_description__text">
          Revenue:<span>{{ oneFilm.revenue }}$</span>
        </p>
        <p class="film_description__text">
          Popularity:<span>{{ oneFilm.vote_average }}</span>
        </p>
      </div>
    </div>
    <p class="film_text">{{ oneFilm.overview }}</p>
    <div class="film_video__block">
      <iframe
        class="film_video"
        :src="video()"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h3 class="similar_title">Watch similar films</h3>
    <v-sheet
      class="similar_slider slide_pages"
      elevation="6"
      v-if="similarFilms.length"
    >
      <v-slide-group
        class="slide_pages__group"
        v-model="model"
        active-class="success"
        show-arrows
      >
        <div
          class="card_container__pages"
          v-for="similar in similarFilms"
          :key="similar.id"
        >
          <div class="card_pages">
            <router-link
              :to="{ name: 'film', params: { id: similar.id } }"
              class="film_router__link__pages"
            >
              <div class="card_img__pages" @click="show(similar.id)">
                <img :src="ima(similar.poster_path)" />
              </div>
            </router-link>
          </div>
        </div>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      oneFilm: null,
      similarFilms: [],
      imagess: "https://image.tmdb.org/t/p/w300",
      filmUrl: "https://www.youtube.com/embed/",
      id: this.$route.params.id,
      urlPathVideo: null,
    };
  },
  methods: {
    getSelectedFilm(query) {
      fetch(
        `https://api.themoviedb.org/3/movie/${query}?api_key=696623e29220dc4a7e31633c86f0dd0d`
      )
        .then((data) => data.json())
        .then((data) => (this.oneFilm = data))
        .catch((e) => console.log(e.message));
      fetch(
        `https://api.themoviedb.org/3/movie/${query}/similar?api_key=696623e29220dc4a7e31633c86f0dd0d`
      )
        .then((data) => data.json())
        .then((data) => (this.similarFilms = data.results))
        .catch((e) => console.log(e.message));
      fetch(
        `https://api.themoviedb.org/3/movie/${query}/videos?api_key=696623e29220dc4a7e31633c86f0dd0d`
      )
        .then((data) => data.json())
        .then((data) => (this.urlPathVideo = data.results[0].key))
        .catch((e) => console.log(e.message));
    },
    show(id) {
      this.getSelectedFilm(id);
      console.log(this.$route.params.id, this.oneFilm);
    },
    video() {
      return this.filmUrl + this.urlPathVideo;
    },
    ima(id) {
      return this.imagess + id;
    },
  },
  mounted() {
    this.getSelectedFilm(this.$route.params.id);
  },
};
</script>

<style scoped>
/* @import "../assets/styles/new_pages.scss"; */
</style>
