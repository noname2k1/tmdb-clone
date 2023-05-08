import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  // state properties, use storeToRefs to get this
  state: () => {
    return {
      isDarkMode: false,
      loading: {
        status: false,
        title: '',
      },
    };
  },
  // public
  actions: {
    setIsDarkMode(isDarkMode) {
      this.isDarkMode = isDarkMode;
    },
    setLoading(status, title) {
      this.loading = {
        status,
        title,
      };
    },
  },
});
