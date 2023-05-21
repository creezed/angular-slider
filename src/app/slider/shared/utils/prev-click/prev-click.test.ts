import { prevClick } from './prev-click.util';

describe('prev-click', () => {
  it('should return the next slide index when currentSlide is less than slidesLength - 1', () => {
    const currentSlide = 2;
    const slidesLength = 5;
    const expectedResult = 3;

    const result = prevClick(currentSlide, slidesLength);

    expect(result).toEqual(expectedResult);
  });

  it('should return 0 when currentSlide is equal to slidesLength - 1', () => {
    const currentSlide = 4;
    const slidesLength = 5;
    const expectedResult = 0;

    const result = prevClick(currentSlide, slidesLength);

    expect(result).toEqual(expectedResult);
  });

  it('should return 0 when currentSlide is greater than slidesLength - 1', () => {
    const currentSlide = 6;
    const slidesLength = 5;
    const expectedResult = 0;

    const result = prevClick(currentSlide, slidesLength);

    expect(result).toEqual(expectedResult);
  });
});
