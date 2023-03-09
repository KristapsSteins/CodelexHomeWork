export default class Carousel {
  rootElement: HTMLDivElement;
  slides: HTMLDivElement[];
  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  carousel: HTMLDivElement;

  currentSlide = 0;

  constructor(selector: string) {
    this.rootElement = document.querySelector(selector);
    this.prevButton = this.rootElement.querySelector('.prev');
    this.nextButton = this.rootElement.querySelector('.next');
    this.carousel = this.rootElement.querySelector('.carousel');
    this.slides = Array.from(
      this.carousel.querySelectorAll('.slide'),
    );
    this.initEvents();
  }

  initEvents() {
    this.prevButton.addEventListener('click', () => {
      this.changeSlide(-1);
    });
    this.nextButton.addEventListener('click', () => {
      this.changeSlide(1);
    });
  }

  changeSlide(offset: number) {
    this.slides[this.currentSlide].classList.remove('slide_selected');
    this.currentSlide += offset;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    } else if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }
    this.slides[this.currentSlide].classList.add('slide_selected');
  }
}
