<template lang="">
  <div
    class="fixed z-50 top-0 left-0 h-1 animate-loading-line bg-blue-400"
  ></div>
</template>
<script setup>
import { useGlobalStore } from '@/stores/global';
import { onUnmounted } from 'vue';

const { setLoading } = useGlobalStore();

const timer = setTimeout(() => {
  setLoading(false, '');
}, 500);

onUnmounted(() => {
  clearTimeout(timer);
});
</script>
<style lang=""></style>
