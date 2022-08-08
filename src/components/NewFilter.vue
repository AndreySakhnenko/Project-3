<template>
  <v-container class="container">
    <v-card class="content_filter">
      <v-tabs>
        <button
          type="button"
          class="hamburger"
          :class="{ active: burgerMenu }"
          @click.prevent="hamburgerMenu"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
        <v-tab
          :class="{ active: burgerMenu }"
          v-show="!burgerMenu"
          class="name_filter"
          v-for="(tabName, index) in tabsName"
          :key="tabName.id"
          @click="activeClass(index)"
          >{{ tabName.name }}
        </v-tab>
        <SearchFilms />
        <v-tab-item v-for="n in 3" :key="n">
          <v-container class="container" v-if="n == 1">
            <v-row class="container_rows" v-if="featureFilms.length">
              <div
                class="container_card"
                v-for="film in featureFilms"
                :key="film.id"
              >
                <router-link
                  class="film_router__link card"
                  :to="{ name: 'film', params: { id: film.id } }"
                >
                  <div class="card_img">
                    <img :src="ima(film.poster_path)" />
                  </div>
                  <h3 class="card_title">{{ film.title }}</h3>
                  <span>Film rating: {{ film.vote_average }}</span>
                  <span>{{ film.release_date }}</span>
                </router-link>
              </div>
            </v-row>
          </v-container>
          <v-container class="container" v-else-if="n == 2">
            <v-row class="container_rows" v-if="popularityFilms.length">
              <div
                class="container_card"
                v-for="popularity in popularityFilms"
                :key="popularity.id"
              >
                <router-link
                  class="film_router__link card"
                  :to="{ name: 'film', params: { id: popularity.id } }"
                >
                  <div class="card_img">
                    <img :src="ima(popularity.poster_path)" />
                  </div>
                  <h3 class="card_title">{{ popularity.title }}</h3>
                  <span>Film rating: {{ popularity.vote_average }}</span>
                  <span>{{ popularity.release_date }}</span>
                </router-link>
              </div>
            </v-row>
          </v-container>
          <v-container class="container" v-else>
            <v-row class="container_rows" v-if="ratingFilms.length">
              <div
                class="container_card"
                v-for="rating in ratingFilms"
                :key="rating.id"
              >
                <router-link
                  class="film_router__link card"
                  :to="{ name: 'film', params: { id: rating.id } }"
                >
                  <div class="card_img">
                    <img :src="ima(rating.poster_path)" />
                  </div>
                  <h3 class="card_title">{{ rating.title }}</h3>
                  <span>Рейтинг фі121льма: {{ rating.vote_average }}</span>
                  <span>{{ rating.release_date }}</span>
                </router-link>
              </div>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <FilmsPagination
      @pageData="pageData"
      :tabs="tabsName"
      :defPage="pageChanged"
    />
  </v-container>
</template>
<script>
import FilmsPagination from "../pages/FilmsPagination";
import SearchFilms from "../pages/SearchFilms";

export default {
  components: {
    FilmsPagination,
    SearchFilms,
  },
  data() {
    return {
      activeTab: null,
      tabsName: [
        {
          name: "New",
          isActive: true,
        },
        {
          name: "Popularity",
          isActive: false,
        },
        {
          name: "Rating",
          isActive: false,
        },
      ],
      burgerMenu: false,
      isActive: true,
      ratingFilms: [],
      popularityFilms: [],
      featureFilms: [],
      imagess: "https://image.tmdb.org/t/p/w300",
      currentFilmPage: [],
      pageChanged: false,
    };
  },
  methods: {
    hamburgerMenu() {
      this.burgerMenu = !this.burgerMenu;
    },
    activeClass(index) {
      this.pageChanged = !this.pageChanged;
      this.tabsName.forEach((el, i) => {
        if (index === i) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
      });
    },
    pageData(secondPagesFilms) {
      this.tabsName.forEach((el, i) => {
        if (el.isActive && el.name == "New") {
          this.featureFilms = secondPagesFilms;
        } else if (el.isActive && el.name == "Popularity") {
          this.popularityFilms = secondPagesFilms;
        } else {
          this.ratingFilms = secondPagesFilms;
          console.log(this.ratingFilms);
        }
      }),
        console.log("text", secondPagesFilms);
    },
    ima(id) {
      return this.imagess + id;
    },
    show() {
      console.log(this.popularityFilms);
    },
  },
  mounted() {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=696623e29220dc4a7e31633c86f0dd0d`
    )
      .then((data) => data.json())
      .then((data) => (this.featureFilms = data.results))
      .catch((e) => console.log(e.message));
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=696623e29220dc4a7e31633c86f0dd0d"
    )
      .then((data) => data.json())
      .then((data) => (this.popularityFilms = data.results))
      .catch((e) => console.log(e.message));
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=696623e29220dc4a7e31633c86f0dd0d&page=3&language=ru"
    )
      .then((data) => data.json())
      .then((data) => (this.ratingFilms = data.results))
      .catch((e) => console.log(e.message));
  },
};
</script>

<style lang="scss" scoped></style>
