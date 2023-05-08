<template lang="">
  <div
    :class="[
      'uppercase flex items-center justify-center font-semibold duration-200 cursor-pointer select-none rounded-full fixed bottom-3 right-3 bg-red-600 text-white hover:bg-white hover:text-red-600 w-12 h-12',
      isShow ? 'visible -translate-y-5' : 'invisible translate-y-5',
    ]"
    @click="handleClick"
  >
    Top
  </div>
</template>
<script>
export default {
  name: "ToTopButton",
  data() {
    return {
      isShow: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleClick() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
};
</script>
<style lang=""></style>
