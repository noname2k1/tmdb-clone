import * as axiosWithoutAuth from '@/configs/axiosWithoutAuth';
// vue/home
const getTrendingFilms = async (media_type = 'all', time_window = 'day') => {
  try {
    const res = await axiosWithoutAuth.default.get(
      `/trending/${media_type}/${time_window}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

const Discover = async (
  with_release_type = 1,
  page = 1,
  sort_by = 'popularity.desc',
  language = 'en-US'
) => {
  try {
    const res = await axiosWithoutAuth.default.get(
      `/discover/movie?sort_by=${sort_by}&language=${language}&page=${page}&with_release_type=${with_release_type}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getPopular = async (
  with_watch_monetization_types = 'flatrate',
  page = 1
) => {
  let url = `/discover/movie?sort_by=popularity.desc&page=${page}&with_watch_monetization_types=${with_watch_monetization_types}`;
  if (with_watch_monetization_types === 'theater')
    url = `/discover/movie?sort_by=popularity.desc&page=${page}&with_release_type=3|2`;
  if (with_watch_monetization_types === 'tv') url = `/tv/popular`;
  try {
    const res = await axiosWithoutAuth.default.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getFreeToWatch = async (type = 'movie') => {
  try {
    const res = await axiosWithoutAuth.default.get(
      `/discover/${type}?sort_by=popularity.desc&page=1&with_watch_monetization_types=free`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getMediaDetail = async (type, media_id) => {
  try {
    const res = await axiosWithoutAuth.default.get(`/${type}/${media_id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// advancedSearch
const advancedSearch = async (page = 1, type = 'movie', params) => {
  try {
    const res = await axiosWithoutAuth.default.get(
      `/discover/${type}?page=${page}`,
      {
        params: params,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export {
  getTrendingFilms,
  Discover,
  getPopular,
  getFreeToWatch,
  advancedSearch,
  getMediaDetail,
};
