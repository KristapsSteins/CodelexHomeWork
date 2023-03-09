import Carousel from "./carouselbase";

export default class CarouselExtend extends Carousel {
  navButtons: NodeListOf<HTMLButtonElement>;

  constructor(selector: string) {
    super(selector);
    this.initNavButtons();
  }

  initNavButtons() {
    this.navButtons = this.rootElement.querySelectorAll('.carousel__button');
    this.navButtons.forEach((button, i) => {
      button.addEventListener('click', () => {
        this.navButtonClick(i);
      });
    });
    this.navButtons[0].classList.add('carousel__button--selected');
  }

  navButtonClick(index: number) {
    this.navButtons.forEach((button) => {
      button.classList.remove('carousel__button--selected');
    });
    this.currentSlide = index;
    this.slides.forEach((slide) => {
      slide.classList.remove('slide_selected');
    });
    this.slides[index].classList.add('slide_selected');
    this.navButtons[index].classList.add('carousel__button--selected');
  }
}
