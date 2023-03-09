import CarouselExtend from "./carouselextend";

export default class CarouselExtendV3 extends CarouselExtend {
  navImg: NodeListOf<HTMLDivElement>;

  constructor(selctor:string) {
    super(selctor);
    this.navImg = this.rootElement.querySelectorAll('.nav__img');

    this.initNavImg();
  }

  initNavImg() {
    this.navImg.forEach((img, i) => {
      img.addEventListener('mouseenter', () => {
        this.setCurrentSlide(i);
      });
    });
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
    this.removeSelectedSlides();
    this.slides[index].classList.add('slide_selected');
  }

  removeSelectedSlides() {
    this.slides.forEach((slide) => {
      slide.classList.remove('slide_selected');
    });
  }
}
