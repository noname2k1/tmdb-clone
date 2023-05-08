<template lang="">
  <header class="flex items-center py-6 border-b border-black/10 bg-primary">
    <div class="inner flex items-center px-10 w-full">
      <div class="flex items-center justify-center">
        <!-- logo -->
        <RouterLink :to="routes.home" class="mr-4">
          <img
            :alt="altImage"
            class="logo"
            src="/img/logo.svg"
            width="125"
            height="125"
          />
        </RouterLink>
        <!-- nav -->
        <nav class="flex items-center">
          <div
            v-for="(navItem, index) in navList"
            :key="navItem.id"
            @click="toggleActiveNav(index)"
            @mouseenter="disabledActive(index)"
            class="group px-3 cursor-pointer uppercase text-white relative"
          >
            <span
              ><h3 class="font-semibold">
                {{ navItem.label }}
              </h3></span
            >
            <div
              :class="[
                'absolute bg-white z-10 -left-0.5 rounded-md overflow-hidden py-2 shadow-lg',
                {
                  block: activeIndex.enabled && activeIndex.index === index,
                  'hidden group-hover:block':
                    !activeIndex.enabled || activeIndex.index !== index,
                },
              ]"
            >
              <router-link
                :to="item.path"
                :class="[
                  'text-black block px-6 py-1 bg-white hover:bg-black/10 whitespace-nowrap font-medium',
                ]"
                v-for="(item, index) in navItem.children"
                :key="item.id"
                @click.stop
              >
                {{ item.label }}
              </router-link>
            </div>
          </div>
        </nav>
      </div>
      <!-- nav -->
      <nav class="flex items-center ml-auto">
        <button class="w-6 h-6 object-contain">
          <img src="/img/plus-white.svg" :alt="altImage" />
        </button>
        <button
          class="ml-7 bg-transparent border-white border rounded-sm px-1 text-white hover:bg-white hover:text-primary font-semibold"
        >
          EN
        </button>
        <button class="text-white font-semibold ml-7">Login</button>
        <button class="text-white font-semibold ml-7">Join TMDB</button>
        <button class="w-7 h-7 object-contain ml-7">
          <img src="/img/search-blue.svg" :alt="altImage" />
        </button>
      </nav>
    </div>
  </header>
</template>
<script>
import navList from '../../datas/header/navList.js';
import { altImage } from '../../configs/constants.js';
import routes from '../../configs/routes.js';
export default {
  name: 'TheHeader',
  data() {
    return {
      activeIndex: {
        enabled: false,
        index: 0,
      },
      routes,
      navList,
      altImage,
      searchBar: false,
    };
  },
  methods: {
    toggleSearchBar() {
      //   console.log(this.searchBar);
      this.searchBar = !this.searchBar;
    },
    toggleActiveNav(index) {
      // console.log(index);
      this.activeIndex.enabled = !this.activeIndex.enabled;
      this.activeIndex.index = index;
    },
    disabledActive(index) {
      if (index !== this.activeIndex.index) {
        this.activeIndex.enabled = false;
      }
    },
  },
};
</script>
<style lang=""></style>
