<template lang="">
  <div class="flex flex-col px-10 py-8 select-none">
    <h1 class="text-2xl font-semibold mb-5">
      {{ convertToTitleCase(router.name) }}
    </h1>
    <div class="flex">
      <button
        v-if="searchBtn"
        class="fixed bottom-0 right-0 left-0 bg-tmdbBlue z-30 py-3 text-lg font-semibold text-white hover:bg-gray-900"
      >
        Search
      </button>
      <!-- side bar -->
      <aside>
        <div class="w-64">
          <!-- sort -->
          <div
            class="rounded-md shadow-md border cursor-pointer"
            @click="handleExpand('sort')"
          >
            <div class="py-3 pl-4 pr-3 flex items-center justify-between">
              <span class="font-semibold">Sort</span>
              <input
                type="image"
                src="/img/chevron-right.svg"
                :alt="altImage"
                :class="[
                  'w-4 h-4',
                  {
                    'transform rotate-90': expands.sort,
                  },
                ]"
              />
            </div>
            <div
              class="border-t py-3 pl-4 pr-3"
              v-if="expands.sort"
              @click.stop
            >
              <Select :data="sortBy" label="Sort Results By" />
            </div>
          </div>
          <!-- where -->
          <div
            class="rounded-md shadow-md border cursor-pointer my-4"
            @click="handleExpand('where')"
          >
            <div class="py-3 pl-4 pr-3 flex items-center justify-between">
              <span class="font-semibold">Where To Watch</span>
              <span
                class="ml-auto mr-1 font-extralight px-3 bg-gray-200 rounded-lg"
                >{{ providers.length }}</span
              >
              <input
                type="image"
                src="/img/chevron-right.svg"
                :alt="altImage"
                :class="[
                  'w-4 h-4',
                  {
                    'transform rotate-90': expands.where,
                  },
                ]"
              />
            </div>
            <div
              class="border-t py-3 pl-4 pr-3"
              v-if="expands.where"
              @click.stop
            >
              <!-- countries -->
              <div class="mb-4">
                <Select :data="countries" label="Country" type="countries" />
              </div>
              <!-- providers -->
              <div class="grid grid-cols-4 gap-2">
                <div
                  class="group relative"
                  v-for="(provider, index) in providers"
                  :key="provider.provider_id"
                  @click="handleProvidersSelect(provider.provider_id)"
                >
                  <div class="">
                    <Image :path="provider.logo_path" rounded />
                  </div>
                  <input
                    type="image"
                    src="/img/tick-white.svg"
                    :alt="altImage"
                    :class="[
                      'group-hover:block absolute z-10 inset-0 bg-tmdbBlue/60 rounded-md',
                      {
                        hidden: !selectedProviders.includes(
                          provider.provider_id
                        ),
                        block: selectedProviders.includes(provider.provider_id),
                      },
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- filters -->
          <div
            class="rounded-md shadow-md border cursor-pointer"
            @click="handleExpand('filters')"
          >
            <div class="py-3 pl-4 pr-3 flex items-center justify-between">
              <span class="font-semibold">Filters</span>
              <input
                type="image"
                src="/img/chevron-right.svg"
                :alt="altImage"
                :class="[
                  'w-4 h-4',
                  {
                    'transform rotate-90': expands.filters,
                  },
                ]"
              />
            </div>
            <!-- show me radios -->
            <FiltterItem :isMounted="expands.filters" title="Show Me">
              <div class="flex flex-col">
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="show-me"
                    id="show-me-1"
                    value="every-thing"
                    class="w-4 h-4 text-white bg-black border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="show-me-1"
                    >Everything</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="show-me"
                    id="show-me-2"
                    value="tvshows-heaven-seen"
                    class="w-4 h-4 text-white bg-black border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="show-me-2"
                    >TV Shows I Haven't Seen</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="show-me"
                    id="show-me-3"
                    value="tvshows-have-seen"
                    class="w-4 h-4 text-white bg-black border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="show-me-3"
                    >TV Shows I Have Seen</label
                  >
                </div>
              </div>
            </FiltterItem>
            <!-- Availabilities checkboxs -->
            <FiltterItem :isMounted="expands.filters" title="Availabilities">
              <div class="flex flex-col">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="all"
                    id="available-all"
                    value="all"
                    class="w-4 h-4 text-tmdbBlue bg-black border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="available-all"
                    >Search all availabilities?</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="3|2"
                    id="available-2"
                    value="stream"
                    checked
                    class="w-4 h-4 text-tmdbBlue bg-black border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="available-2"
                    >Stream</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="free"
                    id="available-3"
                    value="Free"
                    checked
                    class="w-4 h-4 text-tmdbBlue bg-black border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="available-3">Free</label>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="ads"
                    id="available-4"
                    value="ads"
                    checked
                    class="w-4 h-4 text-tmdbBlue bg-black border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="available-4">Ads</label>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="rent"
                    id="available-5"
                    value="rent"
                    checked
                    class="w-4 h-4 text-tmdbBlue bg-black border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="available-5">Rent</label>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="buy"
                    id="available-6"
                    value="buy"
                    checked
                    class="w-4 h-4 text-tmdbBlue bg-black border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="available-6">Buy</label>
                </div>
              </div>
            </FiltterItem>
            <!-- Airdates -->
            <FiltterItem :isMounted="expands.filters" title="Air Dates">
              <div class="flex flex-col">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="all-episodes"
                    id="air-dates-all"
                    value="all"
                    checked
                    class="w-4 h-4 text-tmdbBlue bg-black border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label class="ml-1 font-normal" for="air-dates-all"
                    >Search all episodes?</label
                  >
                </div>
                <div class="flex items-center mt-2">
                  <span class="mr-auto text-black/50">from</span>
                  <input type="date" name="" id="" />
                </div>
                <div class="flex items-center mt-2">
                  <span class="mr-auto text-black/50">to</span>
                  <input type="date" name="" id="" value="2023-03-11" />
                </div>
              </div>
            </FiltterItem>
            <!-- Genres -->
            <FiltterItem :isMounted="expands.filters" title="Genres">
              <filter-checkbox :data="genres" />
            </FiltterItem>
            <!-- Certifications -->
            <FiltterItem :isMounted="expands.filters" title="Certification">
              <filter-checkbox
                :data="certifications"
                target="certifications"
                upperCaseTitle
              />
            </FiltterItem>
            <!-- KeyWords -->
            <FiltterItem
              :isMounted="expands.filters"
              title="Network"
              v-if="router.name.includes('TV')"
            >
              <input
                type="text"
                name="with_networks"
                value=""
                placeholder="Filter by TV networks..."
                class="border rounded-sm focus-within:border-tmdbBlue duration-150 px-3 py-1.5 w-full"
              />
            </FiltterItem>
            <!-- User score -->
            <FiltterItem :isMounted="expands.filters" title="User Score">
              <DoubleRangeSlider
                namePrefix="vote_average"
                :min="0"
                :max="10"
                :step="1"
                :displayIndexs="[5]"
                :units="10"
              ></DoubleRangeSlider>
            </FiltterItem>
            <!-- Minimum user votes -->
            <FiltterItem
              :isMounted="expands.filters"
              title="Minimum User Votes"
            >
              <DoubleRangeSlider
                namePrefix="vote_count"
                :min="0"
                :max="500"
                :step="50"
                :units="10"
                :displayIndexs="[100, 200, 300, 400]"
              ></DoubleRangeSlider>
            </FiltterItem>
            <!-- Runtime -->
            <FiltterItem :isMounted="expands.filters" title="Runtime">
              <DoubleRangeSlider
                namePrefix="with_runtime"
                :min="0"
                :max="400"
                :step="15"
                :units="27"
                :displayIndexs="[120, 240, 360]"
              ></DoubleRangeSlider> </FiltterItem
            ><!-- KeyWords -->
            <FiltterItem :isMounted="expands.filters" title="KeyWords">
              <input
                type="text"
                name="with_keywords"
                value=""
                placeholder="Filter by KeyWords"
                class="border rounded-sm focus-within:border-tmdbBlue duration-150 px-3 py-1.5 w-full"
              />
            </FiltterItem>
          </div>
          <Button size="small" ref="searchRef"> Search </Button>
        </div>
      </aside>
      <!-- list -->
      <div class="pl-8">
        <div
          class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5"
        >
          <FilmCard :data="data" />
        </div>
        <Button>Load More</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useIntersectionObserver } from '@vueuse/core';
import { ref, onMounted } from 'vue';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { advancedSearch } from '@/services/filmServices';
import FilmCard from '@/components/customs/FilmCard.vue';
import Select from '@/components/customs/Select.vue';
import { altImage } from '@/configs/constants';
import { sortBy } from '@/datas/sortBy';
import Button from './customs/Button.vue';
import Image from './customs/Image.vue';
import FiltterItem from './items/FiltterItem.vue';
import FilterCheckbox from './customs/FilterCheckbox.vue';
import DoubleRangeSlider from './customs/DoubleRangeSlider.vue';
import { getCountries } from '@/services/configurationService';
import { getProviders } from '@/services/providerService';
import { getGenres } from '@/services/genreService';
import { getCertification } from '@/services/certificationService';

const searchRef = ref(null);

const data = ref([]);
const expands = ref({
  sort: false,
  where: false,
  filters: true,
});
const searchBtn = ref(false);
// where-filters
const countries = ref([]);
const providers = ref([]);
const genres = ref([]);
const certifications = ref([]);
const selectedProviders = ref([]);

const { stop } = useIntersectionObserver(
  searchRef,
  ([{ isIntersecting }], observerElement) => {
    searchBtn.value = !isIntersecting;
  }
);

const advancedSearchExec = async (page = 1, type = 'movie', params = {}) => {
  try {
    const res = await advancedSearch(page, type, params);
    data.value = res.results;
  } catch (error) {
    console.log(error);
  }
};
const getCountriesExec = async () => {
  try {
    const res = await getCountries();
    countries.value = res;
  } catch (error) {
    console.log(error);
  }
};
const getProvidersExec = async (type = 'movie', watch_region = 'US') => {
  try {
    const res = await getProviders(type, watch_region);
    providers.value = res.results;
  } catch (error) {
    console.log(error);
  }
};
const getGenresExec = async (type = 'movie', language = 'en') => {
  try {
    const res = await getGenres(type, language);
    genres.value = res.genres;
  } catch (error) {
    console.log(error);
  }
};
const getCertificationExec = async (type = 'movie') => {
  try {
    const res = await getCertification(type);
    certifications.value = res.certifications.US;
  } catch (error) {
    console.log(error);
  }
};

const handleExpand = (target) => {
  expands.value[target] = !expands.value[target];
};

const handleProvidersSelect = (provider_id) => {
  const index = selectedProviders.value.indexOf(provider_id);
  if (index === -1) {
    selectedProviders.value.push(provider_id);
  } else {
    selectedProviders.value.splice(index, 1);
  }
};

const router = useRoute();
onMounted(() => {
  advancedSearchExec();
  getCountriesExec();
  getProvidersExec();
  getGenresExec();
  getCertificationExec();
  document.title = `${convertToTitleCase(router.name)} - TMDB clone`;
});
</script>
