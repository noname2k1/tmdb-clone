import * as axiosWithoutAuth from '@/configs/axiosWithoutAuth';

const getCertification = async (type = 'movie') => {
  try {
    const res = await axiosWithoutAuth.default.get(
      `/certification/${type}/list`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { getCertification };
