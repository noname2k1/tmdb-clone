export const addMediaType = (data, media_type) => {
  data.map((item) => {
    item.media_type = media_type;
    return item;
  });
  return data;
};
