import swiperParametrs from "./SwiperParametrs";

const params = {
  slidesPerView: 4,
  centeredSlides: false,
  slidesOffsetBefore: 165,
  spaceBetween: 50,
  loop: true,
  loopedSlides: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
};

describe("swiperParametrs", () => {
  it("swiperParametrs should be defined", () => {
    expect(swiperParametrs).toBeDefined();
  });
});

describe("swiperParametrs", () => {
  it("swiperParametrs should be object", () => {
    expect(swiperParametrs).toBeInstanceOf(Object);
    expect(swiperParametrs).toEqual(expect.any(Object));
  });
});

describe("swiperParametrs", () => {
  it("swiperParametrs should have this parametrs", () => {
    expect(swiperParametrs).toEqual(params);
  });
});