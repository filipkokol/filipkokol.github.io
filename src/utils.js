const preloadedImages = new Set();

export const preloadImage = (imgUrl) => {
  if (preloadedImages.has(imgUrl)) return;

  new Image().src = imgUrl;
  preloadedImages.add(imgUrl);
};
