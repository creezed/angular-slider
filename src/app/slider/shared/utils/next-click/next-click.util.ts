export const nextClick = (currentSlide: number, slidesLength: number) => {
  const previous = currentSlide - 1;
  return previous < 0 ? slidesLength - 1 : previous;
};
