const imageModules = import.meta.glob('../assets/img/thumbs/*.png', { eager: true });

const images = {};
for (const path in imageModules) {
  const filename = path.split('/').pop();
  images[filename] = imageModules[path].default;
}

export default images;
