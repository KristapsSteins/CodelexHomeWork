<script setup lang="ts">
import axios from "axios";
import Joke from "./components/Joke.vue";
</script>

<template>
  <div class="row d-flex align-items-center">
    <div class="col-9">
      <h1 class="pt-2 pb-2">Choose your favorite jokes by category:</h1>
    </div>
    <div class="dropdown col-3">
      <button
        class="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ category }}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" @click="selectCategory('Programming')">Programming</a>
        <a class="dropdown-item" href="#" @click="selectCategory('Misc')">Misc</a>
        <a class="dropdown-item" href="#" @click="selectCategory('Dark')">Dark</a>
        <a class="dropdown-item" href="#" @click="selectCategory('Pun')">Pun</a>
      </div>
    </div>
  </div>
  <Joke
    :jokes="jokes"
    :btnClass="'btn-warning'"
    @handleClick="
      (id, category, joke) => {
        addJokeToFavorites({ id, category, joke });
      }
    "
    :btnText="'Add to favorites'"
  />
</template>

<script lang="ts">
export declare type Jokes = {
  id: string;
  joke: string;
  category: string;
};

export default {
  data() {
    return {
      jokes: [] as Jokes[],
      category: "Programming",
    };
  },

  created() {
    this.fetchJokes();
  },

  methods: {
    fetchJokes() {
      const jokeURL = `https://v2.jokeapi.dev/joke/${this.category}?type=single&amount=10`;
      return axios
        .get(jokeURL)
        .then(({ data }) => {
          this.jokes = data.jokes;
          console.log("jokes", this.jokes);
        })
        .catch((error) => {
          console.error("Error fetching jokes", error);
          throw error;
        });
    },

    selectCategory(category: string) {
      this.category = category;
      this.fetchJokes();
    },

    addJokeToFavorites({ id, category, joke }: Jokes) {
      axios
        .post("http://localhost:3004/addFavorite", {
          id,
          category,
          joke,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("success");
          }
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>