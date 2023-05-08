<template lang="">
  <button
    :class="[
      'w-full bg-tmdbBlue font-semibold hover:bg-gray-950 mt-5 text-white duration-200 text-lg',
      {
        'py-2': size === 'small',
        'py-3': size === 'medium',
        'py-5': size === 'large',
        'rounded-3xl': rounded && size === 'small',
        'rounded-lg': rounded && size === 'medium',
      },
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  rounded: {
    type: Boolean,
    default: true,
  },
});
const emits = defineEmits(['click']);
</script>
