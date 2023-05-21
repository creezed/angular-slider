export const prevClick = (currentSlide: number, slidesLength: number) => {
  const next = currentSlide + 1;
  return next >= slidesLength ? 0 : next;
};
