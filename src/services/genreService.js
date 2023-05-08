import * as axiosWithoutAuth from '@/configs/axiosWithoutAuth';

const getGenres = async (type = 'movie', language = 'en') => {
  try {
    const res = await axiosWithoutAuth.default.get(
      `/genre/${type}/list?language=${language}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { getGenres };
