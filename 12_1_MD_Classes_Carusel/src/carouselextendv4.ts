import CarouselExtendV3 from "./carouseextendv3";

export default class CarouselExtendV4 extends CarouselExtendV3 {
  fullScreenBtn: HTMLButtonElement;
  fullScreenMode: boolean;

  constructor(selector: string) {
    super(selector);
    this.fullScreenBtn = this.rootElement.querySelector('.fullscreen');
    this.fullScreenMode = false;
    this.initSlideShow();
    this.initFullScreen();
  }

  initSlideShow() {
    setTimeout(() => this.runSlideShow(), 2000);
  }

  runSlideShow() {
    if (!this.fullScreenMode) {
      this.removeSelectedSlides();
    }
    this.setNextSlide();
    setTimeout(() => this.runSlideShow(), 2000);
  }

  setNextSlide() {
    this.currentSlide += 1;
    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }
    this.slides[this.currentSlide].classList.add('slide_selected');
  }

  initFullScreen() {
    this.fullScreenBtn.addEventListener('click', () => {
      this.slides.forEach((slide) => {
        slide.style.width = '100%';
        slide.style.height = '100%';
      });
      this.carousel.requestFullscreen();
    });
  }
}
