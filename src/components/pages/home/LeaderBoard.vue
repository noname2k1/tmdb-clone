<template lang="">
  <div class="leader-board-container px-10 py-8">
    <header class="flex items-center mb-4">
      <h1 class="font-semibold text-2xl">Leaderboard</h1>
      <div class="flex flex-col ml-2">
        <div class="flex items-center">
          <div
            class="w-2 h-2 bg-gradient-to-r from-from to-to rounded-full mx-2"
          ></div>
          <span>All Time Edits</span>
        </div>
        <div class="flex items-center">
          <div
            class="w-2 h-2 bg-gradient-to-r from-tmdbOrange to-tmdbRed rounded-full mx-2"
          ></div>
          <span>Edits This Week</span>
        </div>
      </div>
    </header>
    <!-- grid -->
    <div class="grid grid-flow-col grid-rows-5">
      <div
        class="flex items-center mb-5"
        v-for="(item, index) in fakeLeaderBoard"
        :key="item.id"
      >
        <span
          v-if="!item.avatar"
          :class="`${item.fakeColor} w-14 h-14 flex items-center justify-center font-semibold text-2xl text-white rounded-full`"
          >{{ item.name.charAt(0).toUpperCase() }}
        </span>
        <img
          v-else
          :src="item.avatar"
          :alt="item.name"
          class="w-14 h-14 rounded-full"
        />
        <div class="flex flex-col ml-4 flex-1">
          <span
            class="mb-1 font-semibold text-lg hover:text-to cursor-pointer"
            >{{ item.name }}</span
          >
          <line-progress-bar :value="item.all" :max="1500000" target="all" />
          <line-progress-bar :value="item.week" :max="32000" target="week" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LineProgressBar from '@/components/customs/LineProgressBar.vue';
import fakeLeaderBoard from '@/datas/fakeLeaderBoard';
export default {
  data() {
    return {
      fakeLeaderBoard,
    };
  },
  components: {
    LineProgressBar,
  },
};
</script>
<style lang=""></style>
