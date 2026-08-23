// --- images
const preloadedImages = new Set();

export const preloadImage = (imgUrl) => {
  if (preloadedImages.has(imgUrl)) return;

  new Image().src = imgUrl;
  preloadedImages.add(imgUrl);
};

export const preloadImagePromise = (imgUrl) => {
  return new Promise((resolve, reject) => {
    if (preloadedImages.has(imgUrl)) {
      resolve();
      return;
    }

    const img = new Image();
    img.onload = () => {
      preloadedImages.add(imgUrl);
      resolve();
    };
    img.onerror = reject;
    img.src = imgUrl;
  });
};

// --- array functions
export const arrTwice = (arr) => [...arr, ...arr];

export const shuffled = (arr) => {
  const array = [...arr]; // create a copy of array to avoid shuffling in-place!
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const arraySlice = (array, startPercentage, length) => {
  const startIndex = Math.floor(array.length * startPercentage);
  const endIndex = Math.min(array.length - 1, startIndex + length);
  return array.slice(startIndex, endIndex);
};

export const isMobile = () => {
  // this is very simplistic but i don't need more
  return window.innerWidth < 768;
};
