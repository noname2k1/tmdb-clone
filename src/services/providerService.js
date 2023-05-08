import * as axiosWithoutAuth from '@/configs/axiosWithoutAuth';

const getProviders = async (type = 'movie', watch_region = 'US') => {
  try {
    const res = await axiosWithoutAuth.default.get(
      `/watch/providers/${type}?watch_region=${watch_region}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { getProviders };
