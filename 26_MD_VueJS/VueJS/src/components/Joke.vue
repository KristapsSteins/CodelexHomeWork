<script setup lang="ts">
import type { Jokes } from "src/JokesView.vue";

defineProps<{
  jokes: Jokes[];
  btnText: string;
  btnClass: string;
}>();
</script>

<template>
  <div>
    <ul
      class="list-group d-flex flex-row"
      v-for="(joke, id) in jokes"
      :key="id"
    >
      <li class="list-group-item d-flex">
        {{ joke.joke }}
        <button
          class="btn mx-2 m-0 p-1"
          :class="btnClass"
          @click="$emit('handleClick', joke.id, joke.category, joke.joke)"
        >
          {{ btnText }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
  },
};
</script>
