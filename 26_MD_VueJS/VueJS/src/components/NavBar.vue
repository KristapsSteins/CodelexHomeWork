<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const activeLink = ref("Home");

const handleLinkClick = (link: string) => {
  activeLink.value = link;
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-brand">Joke app</div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink
          to="/"
          class="nav-item nav-link"
          :class="{ active: activeLink === 'Home' }"
          @click.prevent="handleLinkClick('Home')"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/favorites"
          class="nav-item nav-link"
          :class="{ active: activeLink === 'Favorite' }"
          @click.prevent="handleLinkClick('Favorite')"
        >
          Favorite
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
