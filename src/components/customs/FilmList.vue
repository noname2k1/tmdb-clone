<template lang="">
  <div
    :class="[
      { 'pt-7 relative': true },
      {
        'bg-trending-bg bg-no-repeat bg-bottom': title === 'Trending',
      },
      {
        'text-white bg-primary': size === 'medium',
      },
    ]"
  >
    <img
      :src="`https://image.tmdb.org/t/p/original${data[bgImageIndex]?.backdrop_path}`"
      :alt="altImage"
      v-if="size === 'medium'"
      class="w-full grayscale top-0 bottom-0 opacity-30 absolute object-fill h-full"
    />
    <!-- header -->
    <header class="flex items-center mx-10 text-2xl font-semibold" v-if="title">
      <h1 class="mr-5">{{ title }}</h1>
      <div
        :class="[
          'rounded-3xl border flex items-center',
          {
            'border-primary': size !== 'medium',
            'border-to': size === 'medium',
          },
        ]"
      >
        <!-- filter when -->
        <button
          :class="[
            { 'py-1 px-5 text-base rounded-3xl': true },
            {
              'bg-primary': tabIndex === item.id,
            },
          ]"
          v-for="item in whenList"
          :key="item.id"
          @click="handleChangeTabIndex(item.id)"
          v-if="type === 'when'"
        >
          <span
            :class="[
              {
                'font-bold': true,
              },
              {
                'bg-gradient-to-r from-from to-to text-transparent bg-clip-text':
                  tabIndex === item.id,
              },
              {
                'text-primary': tabIndex !== item.id,
              },
            ]"
          >
            {{ item.label }}
          </span>
        </button>
        <!-- filter where -->
        <button
          :class="[
            { 'py-1 px-5 text-base rounded-3xl': true },
            {
              'bg-gradient-to-r from-from to-to': tabIndex === item.id,
            },
          ]"
          v-for="item in whereList"
          :key="item.id"
          @click="handleChangeTabIndex(item.id)"
          v-if="type === 'where'"
        >
          <span
            :class="[
              'font-bold',
              {
                'text-primary ': item.id === tabIndex,
              },
            ]"
          >
            {{ item.label }}
          </span>
        </button>
        <!-- filter at -->
        <button
          :class="[
            { 'py-1 px-5 text-base rounded-3xl': true },
            {
              'bg-primary': tabIndex === item.id,
            },
          ]"
          v-for="item in atList"
          :key="item.id"
          @click="handleChangeTabIndex(item.id)"
          v-if="type === 'at'"
        >
          <span
            :class="[
              {
                'font-bold': true,
              },
              {
                'bg-gradient-to-r from-from to-to text-transparent bg-clip-text':
                  tabIndex === item.id,
              },
              {
                'text-primary': tabIndex !== item.id,
              },
            ]"
          >
            {{ item.label }}
          </span>
        </button>
        <!-- filter film's type -->
        <button
          :class="[
            { 'py-1 px-5 text-base rounded-3xl': true },
            {
              'bg-primary': tabIndex === item.id,
            },
          ]"
          v-for="item in typeList"
          :key="item.id"
          @click="handleChangeTabIndex(item.id)"
          v-if="type === 'type'"
        >
          <span
            :class="[
              {
                'font-bold': true,
              },
              {
                'bg-gradient-to-r from-from to-to text-transparent bg-clip-text':
                  tabIndex === item.id,
              },
              {
                'text-primary': tabIndex !== item.id,
              },
            ]"
          >
            {{ item.label }}
          </span>
        </button>
      </div>
    </header>
    <!-- list -->
    <div
      :class="[
        'py-7 pb-4 flex item overflow-x-auto duration-100',
        {
          'opacity-0': loading.status && loading.title === title,
          'opacity-100': !loading.status,
        },
      ]"
    >
      <FilmCard
        class="first:ml-10 last:mr-10 mr-5 h-fit relative"
        :data="data"
        @mouseenter="handleChangeBgImage"
        :size="size"
      />
    </div>
  </div>
</template>
<script>
import {
  getTrendingFilms,
  Discover,
  getPopular,
  getFreeToWatch,
} from '@/services/filmServices';
import { whenList, whereList, atList, typeList } from '@/datas/filterList';
import { addMediaType } from '@/utils/addMediaType';
import { altImage } from '@/configs/constants';
import Image from './Image.vue';
import FilmCard from '@/components/customs/FilmCard.vue';
import CircularProgressBar from './CircularProgressBar.vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores/global';
import { watch, ref, onMounted } from 'vue';
export default {
  props: ['type', 'title', 'size', 'direction'],
  setup(props) {
    const { loading } = storeToRefs(useGlobalStore());
    const { setLoading } = useGlobalStore();
    // reactive states
    const tabIndex = ref(0);
    const data = ref([]);
    const bgImageIndex = ref(0);
    // methods
    const trendings = async (time_window) => {
      try {
        const res = await getTrendingFilms('all', time_window);
        data.value = res.results;
      } catch (error) {
        console.log(error);
      }
    };
    const discover = async (with_release_type = 1) => {
      try {
        const res = await Discover(with_release_type);
        const results = addMediaType(res.results, 'movie');
        data.value = results;
      } catch (error) {
        console.log(error);
      }
    };
    const popular = async (with_watch_monetization_types = 'flatrate') => {
      try {
        const res = await getPopular(with_watch_monetization_types);
        const results = addMediaType(res.results, 'movie');
        data.value = results;
      } catch (error) {
        console.log(error);
      }
    };
    const freetowatch = async (type = 'movie') => {
      try {
        const res = await getFreeToWatch(type);
        const results = addMediaType(res.results, type);
        data.value = results;
      } catch (error) {
        console.log(error);
      }
    };
    const handleChangeTabIndex = (index) => {
      setLoading(true, props.title);
      tabIndex.value = index;
    };
    const handleChangeBgImage = (index) => {
      bgImageIndex.value = index;
    };

    onMounted(async () => {
      if (props.title === 'Trending') {
        await trendings();
      }
      if (props.title === 'Discover') {
        await discover();
      }
      if (props.title === "What's Popular") {
        await popular();
      }
      if (props.title === 'Free To Watch') {
        await freetowatch();
      }
    });

    watch(tabIndex, (current, prev) => {
      if (props.title === 'Trending') {
        trendings(whenList.find((item) => item.id === current).value);
      }
      if (props.title === 'Discover') {
        discover(whereList.find((item) => item.id === current).value);
        bgImageIndex.value = 0;
      }
      if (props.title === "What's Popular") {
        popular(atList.find((item) => item.id === current).value);
      }
      if (props.title === 'Free To Watch') {
        freetowatch(typeList.find((item) => item.id === current).value);
      }
    });
    return {
      tabIndex,
      data,
      whenList,
      whereList,
      atList,
      typeList,
      altImage,
      bgImageIndex,
      loading,
      setLoading,
      handleChangeTabIndex,
      handleChangeBgImage,
    };
  },
  components: {
    Image,
    CircularProgressBar,
    FilmCard,
  },
};
</script>
