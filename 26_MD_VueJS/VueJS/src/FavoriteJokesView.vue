<script setup lang="ts">
import axios from "axios";
import Joke from "./components/Joke.vue";
import type { Jokes } from "./JokesView.vue";
</script>

<template>
  <h1 class="pt-2 pb-2">Favorite Joke List:</h1>
  <Joke 
    :jokes="jokes"
    :btnClass="'btn-danger'"
    btnText="Delete"
    @handleClick="(id) => {deleteFavoriteJoke(id)}"
    />
</template>

<script lang="ts">
export default {
  data: () => ({
    jokes: [] as Jokes[],
  }),

  created() {
    this.fetchFavoriteJokes();
  },

  methods: {
    fetchFavoriteJokes() {
      return axios
        .get("http://localhost:3004/favorite")
        .then(({ data }) => {
          this.jokes = data;
        })
        .catch((error) => {
          console.error("Error fetching favorite jokes", error);
          throw error;
        });
    },

    deleteFavoriteJoke(id: string) {
      return axios
      .delete(`http://localhost:3004/favorite/${id}`)
      .then((res) => {
        this.jokes = this.jokes.filter((joke) => joke.id !== id);
      })
      .catch((error) => {
        console.error("Error deleting favorite joke", error);
        throw error;
      });
    },
  }
}
</script>
