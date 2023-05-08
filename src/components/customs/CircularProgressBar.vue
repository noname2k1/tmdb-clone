<template lang="">
  <div class="flex items-center justify-center rounded-full bg-black w-10 h-10">
    <div
      :class="[
        {
          'spread-process w-8 h-8 rounded-full absolute': true,
        },
        {
          'bg-white/50': getPercent === 0,
          'bg-red-600/50': getPercent < 50,
          'bg-yellow-500/50': getPercent >= 50 && getPercent < 70,
          'bg-green-500/50': getPercent >= 70,
        },
      ]"
    ></div>
    <div
      :class="[
        { 'w-4 h-8 rounded-r-full absolute right-1': true },
        {
          'bg-white': getPercent === 100,
          'bg-red-600': getPercent < 50,
          'bg-yellow-500': getPercent >= 50 && getPercent < 70,
          'bg-green-500': getPercent >= 70,
        },
      ]"
      :style="`clip:rect(0px,50px,${
        getPercent >= 50 ? '100px' : `${(getPercent * 32) / 50}px`
      },0px)`"
    ></div>
    <div
      :class="[
        { 'w-4 h-8 rounded-l-full absolute left-1': true },
        {
          'bg-white': getPercent === 100,
          'bg-red-600': getPercent < 50,
          'bg-yellow-500': getPercent >= 50 && getPercent < 70,
          'bg-green-500': getPercent >= 70,
        },
      ]"
      v-if="getPercent > 50"
      :style="`clip:rect(${32 - (getPercent * 32) / 100}px,50px,100px,0px)`"
    ></div>
    <div
      class="w-7 h-7 bg-black rounded-full absolute text-white items-center flex text-xs font-bold justify-center"
    >
      <span class="flex font-bold" v-if="getPercent > 0"
        >{{ Math.floor(getPercent)
        }}<span class="text-[8px] inline-block mb-auto h-fit">%</span></span
      >
      <span v-else>NR</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['percent'],
  //   data() {
  //     return {
  //       percentNum: 0,
  //     };
  //   },
  computed: {
    getPercent() {
      if (+this.percent < 10) {
        return +this.percent * 10;
      } else if (+this.percent > 100) {
        return +this.percent / 10;
      }
      return +this.percent;
    },
  },
};
</script>
<style lang=""></style>
