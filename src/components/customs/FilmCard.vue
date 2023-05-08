<script setup>
import Image from './Image.vue';
import CircularProgressBar from './CircularProgressBar.vue';
import { altImage } from '@/configs/constants';
import { ref, onMounted, computed } from 'vue';
// attributes/reactive states
const more = ref({
  id: null,
  on: false,
});
// methods
const handleMore = (id) => {
  more.value.on = !more.value.on;
  more.value.id = id;
};

const addSlugData = computed(() => {
  return props.data.map((item) => {
    return {
      ...item,
      slug: `${item.id}-${
        item.name
          ? item.name.toLowerCase().replace(/\s/g, '-')
          : item.title.toLowerCase().replace(/\s/g, '-')
      }`,
    };
  });
});

// props
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  size: {
    type: String,
    default: 'auto',
  },
  option: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: '',
  },
});
// on mounted
onMounted(() => {
  // click outside to toggle more
  document.addEventListener('click', (e) => {
    // console.log(e.target.closest(".more-item"));
    if (e.target.closest('.options')) return;
    more.value.on = false;
  });
});
// emits - custom events
const emits = defineEmits(['mouseenter']);
</script>
<template lang="">
  <router-link
    :to="`/${film.media_type ? film.media_type : 'movie'}/${film.slug}`"
    :class="[
      'relative flex flex-col',
      {
        'first:ml-10 last:mr-10 mr-5': size !== 'auto',
        'h-full': size === 'auto',
        'h-fit': size !== 'auto',
      },
    ]"
    v-for="(film, index) in addSlugData"
    :key="film.id"
    @mouseenter="$emit('mouseenter', index)"
  >
    <!-- overlay when option btn clicked -->
    <div
      v-if="film.id === more.id && more.on && size !== 'medium'"
      class="w-full h-full bg-black/50 z-10 rounded-md absolute backdrop-blur-xl"
    ></div>
    <div
      :class="[
        'relative',
        {
          'h-38 w-40': size === 'smail',
          'h-44 w-[300px] group': size === 'medium',
          'w-auto': size === 'auto',
        },
      ]"
    >
      <!-- play icon -->
      <div
        v-if="size === 'medium' && (more.id !== film.id || !more.on)"
        class="group-hover:w-20 group-hover:h-20 duration-200 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 z-10 invert"
      >
        <img src="/img/play.svg" :alt="altImage" />
      </div>
      <!-- options -->
      <div
        :class="[
          'options group-hover:top-0 group-hover:-right-1 absolute w-6 h-6 top-2 right-2 z-10 hover:opacity-100 duration-150',
          {
            'opacity-100': film.id === more.id && more.on,
            'opacity-60': film.id !== more.id || !more.on,
          },
        ]"
        @click="handleMore(film.id)"
      >
        <input
          type="image"
          src="/img/circle-more.svg"
          :alt="altImage"
          :class="{
            'w-full h-full block': true,
            'opacity-100': film.id !== more.id && more.on,
            'opacity-0': film.id === more.id && more.on,
          }"
        />
        <!-- option items -->
        <div
          class="more-list absolute top-4 -left-14 rounded-md overflow-hidden"
          v-if="film.id === more.id && more.on"
          @click.stop
        >
          <div
            class="more-item text-primary flex bg-white px-6 py-2 whitespace-nowrap border-b border-black/10 hover:bg-primary hover:text-white cursor-pointer select-none duration-200"
          >
            Add to list
          </div>
          <div
            class="more-item text-primary flex bg-white px-6 py-2 whitespace-nowrap border-b border-black/10 hover:bg-primary hover:text-white cursor-pointer select-none duration-200"
          >
            Favourite
          </div>
          <div
            class="more-item text-primary flex bg-white px-6 py-2 whitespace-nowrap border-b border-black/10 hover:bg-primary hover:text-white cursor-pointer select-none duration-200"
          >
            Watchlist
          </div>
          <div
            class="more-item text-primary flex bg-white px-6 py-2 whitespace-nowrap border-b border-black/10 hover:bg-primary hover:text-white cursor-pointer select-none duration-200"
          >
            Your rating
          </div>
        </div>
      </div>
      <!-- image movie -->
      <Image
        :path="
          size === 'smail'
            ? film.poster_path
            : size === 'medium'
            ? film.backdrop_path
            : film.poster_path
        "
        :rounded="true"
        :roundedBNone="size === 'auto'"
        class="group-hover:scale-110 duration-200"
      />
      <!-- rating -->
      <div
        class="absolute -bottom-5 left-3"
        v-if="size === 'smail' || size === 'auto'"
      >
        <circular-progress-bar
          :percent="film.vote_average"
        ></circular-progress-bar>
      </div>
    </div>
    <!-- texts -->
    <div
      :class="[
        'pt-6 truncate flex-1',
        {
          'w-40': size === 'smail',
          'w-[300px] group': size === 'medium',
          'shadow-2xl rounded-b-md px-2 pb-4 border border-t-0':
            size === 'auto',
        },
      ]"
    >
      <p
        :class="[
          'pt-2 whitespace-pre-wrap hover:text-tmdbBlue duration-200',
          {
            'font-bold': size !== 'medium',
          },
          {
            'text-center font-medium text-xl': size === 'medium',
          },
        ]"
      >
        {{ film.name ? film.name : film.title }}
      </p>
      <p
        class="text-gray-500 text-sm"
        v-if="size === 'smail' || size === 'auto'"
      >
        {{ film.first_air_date ? film.first_air_date : film.release_date }}
      </p>
      <span class="text-gray-300 text-sm" v-else-if="size === 'medium'">
        {{ film.overview }}
      </span>
    </div>
  </router-link>
</template>
