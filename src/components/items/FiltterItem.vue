<template lang="">
  <div class="border-t py-3 pl-4 pr-3" v-if="isMounted" @click.stop>
    <h3 class="font-extralight mb-2.5">{{ title }}</h3>
    <slot />
  </div>
</template>
<script setup>
const props = defineProps({
  isMounted: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
