<template lang="">
  <div class="flex flex-wrap gap-2">
    <div
      v-for="(item, index) in sortedData"
      :key="target === 'certifications' ? item.certification : item.id"
      class="rounded-2xl bg-white border-black/40 border px-3 hover:bg-tmdbBlue hover:text-white hover:border-tmdbBlue py-0.5 duration-200"
    >
      <span
        :class="[
          {
            uppercase: upperCaseTitle,
          },
        ]"
        >{{
          target === 'certifications' ? item.certification : item.name
        }}</span
      >
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  upperCaseTitle: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String,
    default: '',
  },
});

const sortedData = computed(() => {
  if (props.target === 'certifications') {
    return props.data.sort((a, b) => {
      if (a.order < b.order) return -1;
      if (a.order > b.order) return 1;
      return 0;
    });
  }
  return props.data.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
});
</script>
<style lang=""></style>
