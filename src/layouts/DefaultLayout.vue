<template lang="">
  <div>
    <TheHeader />
    <div class="max-w-[1400px] flex mx-auto flex-col select-none">
      <router-view />
    </div>
    <!-- <TheFooter /> -->
    <!-- <ToTopButton /> -->
  </div>
</template>
<script>
import TheHeader from '../components/partials/Header.vue';
import TheFooter from '../components/partials/Footer.vue';
// import ToTopButton from "@/components/customs/ToTopButton.vue";
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
    // ToTopButton,
  },
};
</script>
<style lang=""></style>
