const imageModules = import.meta.glob('../assets/img/thumbs/*.png', {
  query: {
    w: '1800;500',
    format: 'avif',
    quality: '70',
    withoutEnlargement: true,
  },
  eager: true,
});

const projectImages = {};

for (const path in imageModules) {
  const filenameFull = path.split('/').pop();
  const filename = filenameFull.split('.').shift();

  projectImages[filename] = {
    lg: imageModules[path].default[0],
    sm: imageModules[path].default[1],
  };
}

export default projectImages;
