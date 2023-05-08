<template>
  <div class="relative flex items-center justify-center">
    <img src="/img/inner_bg/1.jpg" :alt="altImage" />
    <div class="absolute text-white w-[90%]">
      <h1 class="text-4xl font-black">Welcome.</h1>
      <p class="text-3xl font-medium">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
      <div class="flex items-center justify-center mt-12 relative">
        <input
          type="text"
          placeholder="Search for a movie, TV show, person..."
          class="flex-1 py-2 px-4 rounded-3xl h-12 text-black pr-28"
        />
        <button
          class="absolute right-0 py-2 h-12 px-8 font-bold hover:text-black bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl"
        >
          Search
        </button>
      </div>
    </div>
  </div>

  <!-- trending films -->
  <FilmList type="when" size="smail" title="Trending" />
  <!-- Popular films -->
  <FilmList type="where" size="medium" title="Discover" />
  <!-- What's popular -->
  <FilmList type="at" size="smail" title="What's Popular" />
  <!-- Free To Watch -->
  <FilmList type="type" size="smail" title="Free To Watch" />

  <!-- Leader Board (hard code) -->
  <leader-board />
</template>

<script setup>
import FilmList from '@/components/customs/FilmList.vue';
import { altImage } from '@/configs/constants';
import LeaderBoard from '@/components/pages/home/LeaderBoard.vue';
document.title = 'TMDB HomePage';
</script>
