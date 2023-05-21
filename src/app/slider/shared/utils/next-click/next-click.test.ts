import { nextClick } from './next-click.util';

describe('next-click', () => {
  it('should return the previous slide index when currentSlide is greater than 0', () => {
    const currentSlide = 2;
    const slidesLength = 5;
    const expectedResult = 1;

    const result = nextClick(currentSlide, slidesLength);

    expect(result).toEqual(expectedResult);
  });

  it('should return slidesLength - 1 when currentSlide is 0', () => {
    const currentSlide = 0;
    const slidesLength = 5;
    const expectedResult = slidesLength - 1;

    const result = nextClick(currentSlide, slidesLength);

    expect(result).toEqual(expectedResult);
  });

  it('should return slidesLength - 1 when currentSlide is negative', () => {
    const currentSlide = -2;
    const slidesLength = 5;
    const expectedResult = slidesLength - 1;

    const result = nextClick(currentSlide, slidesLength);

    expect(result).toEqual(expectedResult);
  });
});
