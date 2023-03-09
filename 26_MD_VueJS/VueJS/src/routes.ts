import { createRouter, createWebHashHistory } from "vue-router";
import JokesView from "./JokesView.vue";
import FavoriteJokes from "./FavoriteJokesView.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: JokesView,
        },
        {
            path: "/favorites",
            component: FavoriteJokes,
        },
    ],
});

export default router;
