<template lang="">
  <nav class="flex items-center justify-center gap-10 p-3 font-semibold">
    <div
      class="flex flex-col relative group cursor-pointer"
      v-for="(navItem, index) in detailNavList"
      :key="index"
    >
      <span
        >{{ navItem.label }}
        <img src="" :alt="altImage" />
      </span>
      <div class="absolute top-full group-hover:visible invisible duration-150">
        children
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getMediaDetail } from '@/services/filmServices';
import { ref, onMounted, watch } from 'vue';
import detailNavList from '@/datas/detailNavList';
import { altImage } from '@/configs/constants';

const detailData = ref();
const route = useRoute();
const router = useRouter();

watch(detailData, () => {
  //   console.log(detailData.value);
  document.title = detailData.value.name
    ? `${detailData.value.name} | TMDb clone`
    : `${detailData.value.title} | TMDb clone`;
});

const { slug, type } = route.params;
const restType = ['movie', 'tv'].find((mediaType) => mediaType !== type);
const id = slug.split('-')[0];

const getDetails = async () => {
  try {
    const res = await getMediaDetail(type, id);
    // console.log(res);
    detailData.value = res;
  } catch (error) {
    if (error.response.data['status_code'] === 34) {
      const res = await getMediaDetail(restType, id);
      detailData.value = res;
      router.replace({
        name: 'media detail',
        params: {
          type: restType,
          slug,
        },
      });
    }
  }
};

onMounted(() => {
  getDetails();
});
</script>
