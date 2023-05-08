<template lang="">
  <div
    v-lazy-container="{
      selector: 'img',
      loading: '/img/picture-grey.svg',
      error: '/img/picture-grey.svg',
    }"
    class="flex items-center justify-center w-full h-full"
  >
    <img
      :data-src="completeImageSrc(path)"
      :alt="altImage"
      :class="[
        'object-fill rounded-md shadow-lg',
        {
          'w-full h-full': true,
        },
        {
          'rounded-lg': rounded,
          'rounded-b-none': roundedBNone,
        },
      ]"
    />
  </div>
</template>
<script>
import { altImage } from '@/configs/constants';
import completeImageSrc from '@/utils/completeImageSrc';
export default {
  setup() {
    return {
      altImage,
      completeImageSrc,
    };
  },
  props: ['path', 'rounded', 'roundedBNone'],
};
</script>
<style lang=""></style>
