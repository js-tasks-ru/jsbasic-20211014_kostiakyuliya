import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let elem = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left" style="display: none;">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner"></div>
    </div>
    `);
    this.numberOfSlides = slides.length;
    let carousel__inner = elem.querySelector('.carousel__inner');
    for (let obj in slides){
      let elem_slide = createElement(`
      <div class="carousel__slide">
        <img class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price"></span>
          <div class="carousel__title"></div>
          <button type="button"  class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `);
      let carousel__img = elem_slide.querySelector(`.carousel__img`);
      let price = elem_slide.querySelector(".carousel__price");
      let title = elem_slide.querySelector(`.carousel__title`);
      elem_slide.setAttribute(`data-id`,`${slides[obj].id}`);
      carousel__img.setAttribute(`src`, `/assets/images/carousel/${slides[obj].image}`);
      price.innerHTML = `€${slides[obj].price.toFixed(2)}`;
      title.innerHTML = `${slides[obj].name}`;
      carousel__inner.append(elem_slide);
      let button = elem_slide.querySelector(`button`);
      button.addEventListener("click", this.ClickOnButtonProduct);
      this.elem=elem;
    }
    //for end
    this.initCarousel();  
  }
  ClickOnButtonProduct(){
    let id=this.parentElement.parentElement.getAttribute(`data-id`);
    let event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
    this.dispatchEvent(event);
  }
  initCarousel() {
    let pointNow=0;
    let carousel = this.elem.querySelector(".carousel__inner");
    let butt_left = this.elem.querySelector(".carousel__arrow_left");
    let butt_right = this.elem.querySelector(".carousel__arrow_right");
    const numberOfSlides = this.numberOfSlides;
    // seeTheButton(pointNow);
    butt_right.addEventListener("click",OnClickRight);
    function OnClickRight(){
      let length = carousel.offsetWidth;
      console.log(pointNow);
      if(pointNow <= length*(numberOfSlides - 1)){
        carousel.style.transform = `translateX(-${pointNow+length}px)`;
        pointNow = pointNow + length;
        seeTheButton(pointNow);
      }
    }
    butt_left.addEventListener("click",OnClickLeft);
    function OnClickLeft(){
      let length = carousel.offsetWidth;
      console.log(pointNow);
      if(pointNow >= 0){
        carousel.style.transform = `translateX(-${pointNow-length}px)`;
        pointNow = pointNow - length;
        seeTheButton(pointNow);
      }
    }
    function seeTheButton(pointNow){
      let length = carousel.offsetWidth;
      if(pointNow != 0){
        butt_left.style.display = '';
      }
      else{
        butt_left.style.display = 'none';
      }
      if (pointNow!=length*(numberOfSlides-1)){
        butt_right.style.display = '';
      }
      else{
        butt_right.style.display = 'none';
      }
    }
  }
}

