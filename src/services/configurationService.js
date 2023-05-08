import * as axiosWithoutAuth from '@/configs/axiosWithoutAuth';

const getCountries = async () => {
  try {
    const res = await axiosWithoutAuth.default.get(`/configuration/countries`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export { getCountries };
