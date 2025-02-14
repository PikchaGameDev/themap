export class FriendSlider {
  sliderContainer;
  slider;
  slideNumber = 8;
  direction = 0;

  slideArray = Array.from(
    { length: 20 },
    () =>
      `<div class="slide ${
        Math.floor(Math.random() * 2) ? "slide-empty" : ""
      }"></div>`
  );

  moving = true;

  constructor() {
    this.sliderContainer = document.createElement("div");

    this.sliderContainer.classList.add("slider-container");

    this.sliderContainer.innerHTML = this.createSlider();

    this.slider = this.sliderContainer.querySelector(".slider");

    this.addListeners();
  }

  createSlider() {
    return `
        <div class="slider-arrow slider-arrow--prev"></div>

        <div class="slider-arrow slider-arrow--next"></div>

        <div class="overflow-container">
            <div class="slider">
                ${this.slideArray.join(" ")}
            </div>
        <div>
      `;
  }

  handleLeftArrowClick() {
    this.direction = -1;
    this.slider.style.transform = "translate(" + -100 / this.slideNumber + "%)";
  }

  handleRightArrowClick() {
    if (this.direction === -1) {
      this.slider.appendChild(this.slider.firstElementChild);
      this.direction = 1;
    }
    this.direction = 1;
    this.slider.style.transform = "translate(" + 100 / this.slideNumber + "%)";
  }

  handleSliderTransition() {
    if (this.direction === -1) {
      this.slider.appendChild(this.slider.firstElementChild);
    } else if (this.direction === 1) {
      this.slider.prepend(this.slider.lastElementChild);
    }

    this.slider.style.transition = "none";
    this.slider.style.transform = "translate(0)";

    setTimeout(() => {
      this.slider.style.transition = "all 0.5s";
    });
  }

  addListeners() {
    this.sliderContainer
      .querySelector(".slider-arrow--prev")
      .addEventListener("click", this.handleLeftArrowClick.bind(this));

    this.sliderContainer
      .querySelector(".slider-arrow--next")
      .addEventListener("click", this.handleRightArrowClick.bind(this));

    this.slider.addEventListener(
      "transitionend",
      this.handleSliderTransition.bind(this)
    );
  }

  getView() {
    return this.sliderContainer;
  }
}
