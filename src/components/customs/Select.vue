<template lang="">
  <label class="mb-1 block font-extralight">{{ label }}</label>
  <div
    :class="[
      'bg-gray-200 text-gray-900 text-sm rounded-md block w-full p-2.5 relative cursor-pointer',
      {
        'bg-gray-300': sortTable,
      },
    ]"
    @click="ToggleSortTable"
    :data-value="
      data.find((item) => {
        if (selectedId === item.id) {
          return item;
        }
      })?.value
        ? data.find((item) => {
            if (selectedId === item.id) {
              return item;
            }
          }).value
        : data.find((item) => {
            if (selectedId === item.iso_3166_1) {
              return item;
            }
          })?.iso_3166_1
    "
  >
    <!-- selected item -->
    <span class="flex items-center">
      <img
        :src="`/img/flags/${
          data.find((item) => {
            if (item?.iso_3166_1 === selectedId) {
              return item;
            }
          })?.iso_3166_1
        }.png`"
        :alt="altImage"
        v-if="type === 'countries'"
        class="w-6 h-6 object-cover mr-2"
      />
      {{
        data.find((item) => {
          if (item.id === selectedId) {
            return item;
          }
        })?.name
          ? data.find((item) => {
              if (item.id === selectedId) {
                return item;
              }
            }).name
          : data.find((item) => {
              if (item.iso_3166_1 === selectedId) {
                return item;
              }
            })?.english_name
      }}
    </span>
    <!-- sort table -->
    <div
      :class="[
        'absolute left-0 top-full bg-white z-20 w-full border rounded-md',
        {
          hidden: !sortTable,
        },
      ]"
    >
      <div
        class="px-3 py-2 border focus-within:border-tmdbBlue my-4 mx-4 flex items-center rounded-md pr-0 cursor-default"
        v-if="type === 'countries'"
        @click.stop
      >
        <input
          type="text"
          ref="searchCountryRef"
          :value="searchQuery"
          @input="handleFilterCountry"
        />
        <img src="/img/smail-search.svg" :alt="altImage" class="w-4 h-4" />
      </div>
      <div class="overflow-y-auto max-h-40">
        <div
          class="p-10 font-extralight text-center"
          v-if="filterData.length === 0"
        >
          No Data Found
        </div>
        <div
          v-for="item in filterData"
          :key="item.value ? item.value : item.iso_3166_1"
          :data-selected="selectedId === item.iso_3166_1"
          :value="item.value ? item.value : item.iso_3166_1"
          :id="item.value ? item.value : item.iso_3166_1"
          :class="[
            'bg-white px-3 py-2 flex items-center',
            {
              'hover:bg-black/25': selectedId !== item.iso_3166_1,
              'hover:bg-tmdbBlue hover:text-white':
                selectedId === item.iso_3166_1,
            },
          ]"
          @click.stop="handleSelectedId(item.iso_3166_1)"
        >
          <img
            :src="`/img/flags/${item.iso_3166_1}.png`"
            :alt="altImage"
            v-if="type === 'countries'"
            class="w-6 h-6 object-cover mr-2"
            @error="handleErrorImage"
          />
          <span
            :class="[
              'text-sm',
              {
                'font-semibold': item.iso_3166_1 === selectedId,
              },
            ]"
            >{{ item.name ? item.name : item.english_name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { altImage } from '@/configs/constants';
import { ref, onMounted, watch, computed } from 'vue';
import { useDebounceFn } from '@vueuse/core';

const searchCountryRef = ref(null);
const selectedId = ref('');
const sortTable = ref(false);
const searchQuery = ref('');

const ToggleSortTable = () => {
  sortTable.value = !sortTable.value;
};

const handleSelectedId = (id) => {
  selectedId.value = id;
  sortTable.value = false;
};

const handleErrorImage = (e) => {
  e.target.parentNode.classList.add('hidden');
};

const handleFilterCountry = useDebounceFn((e) => {
  searchQuery.value = e.target.value;
}, 500);

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: '',
  },
});

onMounted(() => {
  if (props.type === 'countries') {
    selectedId.value = 'US';
  } else {
    selectedId.value = props.data[0].id;
  }
});

watch(sortTable, () => {
  searchQuery.value = '';
  if (sortTable.value) {
    setTimeout(() => {
      if (searchCountryRef.value) {
        searchCountryRef.value.focus();
      }
    }, 100);
  }
});

const filterData = computed(() => {
  let filterDt = ref([]);
  filterDt.value = props.data;

  if (filterDt.value.length > 0 && props.type === 'countries') {
    return filterDt.value.filter((item) => {
      // countries.value is the actual array...
      return item.english_name
        .toLowerCase()
        .match(searchQuery.value.toLowerCase());
    });
  } else {
    return filterDt.value;
  }
});
</script>
