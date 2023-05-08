const completeImageSrc = (ImagePath) => {
  return `https://image.tmdb.org/t/p/original${
    ImagePath.startsWith('/') ? ImagePath : `/${ImagePath}`
  }`;
};

export default completeImageSrc;
