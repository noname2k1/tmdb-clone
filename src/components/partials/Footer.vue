<template lang="">
  <footer class="flex items-center justify-center bg-primary">
    <!-- logo -->
    <div class="w-32 h-24 mr-6 relative">
      <img
        src="/img/blue-square-2.svg"
        :alt="altImage"
        class="absolute right-0 bottom-[40%]"
      />
      <div
        class="mt-4 w-fit rounded-md bg-white text-teal-600 px-4 py-2 text-center whitespace-nowrap font-semibold text-lg absolute right-0 -bottom-6"
      >
        Hi, ninhnam2k1!
      </div>
    </div>
    <!-- nav -->
    <nav class="flex py-20">
      <div
        v-for="navItem in footerLinks"
        :key="navItem.id"
        class="px-3 cursor-pointer text-white select-none"
      >
        <span
          ><h3 class="font-bold text-lg uppercase cursor-default">
            {{ navItem.label }}
          </h3></span
        >
        <ul class="text-white">
          <li v-for="link in navItem.children" :key="link.id">
            <router-link
              :to="link.path"
              class="font-semibold hover:opacity-50 duration-200"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>
<script>
import { altImage } from '@/configs/constants';
import footerLinks from '@/datas/footer';
export default {
  name: 'TheFooter',
  data() {
    return {
      altImage,
      footerLinks,
    };
  },
};
</script>
<style lang=""></style>
