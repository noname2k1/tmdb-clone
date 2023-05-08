<template lang="">
  <div class="relative">
    <!-- values -->
    <input
      type="hidden"
      :name="namePrefix + '.gte'"
      :value="gteValue"
      class="hidden"
    />
    <input
      type="hidden"
      :name="namePrefix + '.lte'"
      :value="lteValue < max ? lteValue : max"
      class="hidden"
    />
    <div
      :class="[
        'absolute bottom-[110%] bg-black text-white px-2 rounded-md left-1/2 -translate-x-1/2 duration-150',
        { visible: displayToast, invisible: !displayToast },
      ]"
    >
      {{ `${gteValue} - ${lteValue < max ? lteValue : max}` }}
    </div>
    <div class="flex w-full justify-center items-center h-2 mb-0.5">
      <div
        class="w-[calc(100%-8px)] h-full border-x border-x-black/40 flex items-baseline relative"
      >
        <div
          :class="[
            'flex-1 border-l border-inherit first:border-l-0 relative',
            {
              'h-full': item.hFull,
              'h-1': !item.hFull,
            },
          ]"
          v-for="(item, index) in parts"
          :key="index"
        >
          <div
            :class="[
              'h-1 absolute w-[120%]',
              {
                'bg-tmdbBlue': item.value >= gteValue && item.value < lteValue,
                'top-[118%]': !item.hFull,
                'top-[110%]': item.hFull,
              },
            ]"
          >
            <div class="absolute top-full text-xs -left-3" v-if="item.hFull">
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- line -->
    <div class="flex items-center justify-between bg-black/10 w-full h-1">
      <div
        :class="[
          'rounded-full relative group',
          {
            'bg-transparent h-5 w-5': ![lteValue, gteValue].includes(item),
            'bg-tmdbBlue h-3.5 w-3.5': [lteValue, gteValue].includes(item),
            '-left-[1px]': index < indexs.length / 2,
            'left-[1px]': index > indexs.length / 2,
            [index]: index,
          },
        ]"
        v-for="(item, index) in indexs"
        :key="index"
        @click="handleSetValue(item)"
      >
        <div
          class="absolute top-[120%] hidden group-hover:block border border-black/40 px-2 rounded-lg bg-white"
        >
          {{ item > max ? max : item }}
        </div>
      </div>
    </div>
    <!-- index -->
    <div class="flex items-center justify-between mb-0.5">
      <span class="text-xs font-extralight text-inherit">{{ min }}</span>
      <!-- <span
        class="text-xs font-extralight ml-1"
        v-for="(item, index) in displayIndexs"
        :key="index"
        >{{ item }}</span
      > -->
      <span class="text-xs font-extralight text-inherit">{{ max }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';
const gteValue = ref(props.min);
const lteValue = ref(props.max);
const displayToast = ref(false);

const parts = computed(() => {
  const parts = [];
  const step = props.step;
  const min = props.min;
  const max = props.max;
  const displayIndexs = props.displayIndexs;

  for (let i = 0; i < props.units; i++) {
    const value = min + step * i;
    const hFull = displayIndexs.includes(value);
    parts.push({
      value,
      hFull,
    });
  }
  return parts;
});
const indexs = computed(() => {
  const indexs = [];
  const step = props.step;
  const min = props.min;
  const max = props.max;
  for (let i = 0; i <= props.units; i++) {
    const value = min + step * i;
    indexs.push(value);
  }
  return indexs;
});

// console.log(indexs.value);

const handleSetValue = (val) => {
  // console.log(Math.abs(lteValue.value - val));
  if (Math.abs(lteValue.value - val) < Math.abs(gteValue.value - val)) {
    lteValue.value = val;
  } else if (Math.abs(lteValue.value - val) > Math.abs(gteValue.value - val)) {
    gteValue.value = val;
  } else {
    lteValue.value = val;
  }
  // console.log(lteValue.value, gteValue.value);
};

// state changes
watch([lteValue, gteValue], () => {
  displayToast.value = true;
});
watch(displayToast, () => {
  setTimeout(() => {
    displayToast.value = false;
  }, 1000);
});

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    required: true,
  },
  displayIndexs: {
    type: Array,
    required: true,
  },
  namePrefix: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    default: 10,
  },
});
</script>
