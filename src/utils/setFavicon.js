const setFavicon = (theme) => {
  const link = document.querySelector('link[rel="icon"]');

  if (link && theme === 1) {
    link.setAttribute('href', 'assets/building.png');
    return theme;
  }
  if (link && theme === 2) {
    link.setAttribute('href', 'assets/dev.png');
    return theme;
  }
  link.setAttribute('href', 'assets/parachutiste.png');
  return theme;
};

export default setFavicon;
