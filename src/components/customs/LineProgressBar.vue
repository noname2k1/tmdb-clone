<template lang="">
  <div class="flex items-center">
    <div
      :class="[
        'line-progress-bar bg-gradient-to-r h-2 rounded-md',
        {
          'from-from to-to': target === 'all',
          'from-tmdbOrange to-tmdbRed': target === 'week',
        },
      ]"
      :style="{ width: getPercent }"
    ></div>
    <span class="ml-2 text-xs font-bold">{{
      value.toLocaleString('en-US')
    }}</span>
  </div>
</template>
<script>
export default {
  props: ['max', 'value', 'target'],
  computed: {
    getPercent() {
      return ((this.value / this.max) * 100).toFixed(2) + '%';
    },
  },
};
</script>
<style lang=""></style>
