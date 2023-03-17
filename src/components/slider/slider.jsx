export const setSliderSettings = actors => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
  };

  if (actors < 5) {
    return { ...settings, slidesToShow: actors };
  }
  return settings;
};