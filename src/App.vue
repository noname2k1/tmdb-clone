<script setup>
import { RouterView } from 'vue-router';
import LoadingLine from './components/customs/LoadingLine.vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from './stores/global';

const { loading } = storeToRefs(useGlobalStore());
</script>

<template>
  <section>
    <loading-line v-if="loading.status" />
    <RouterView />
  </section>
</template>
