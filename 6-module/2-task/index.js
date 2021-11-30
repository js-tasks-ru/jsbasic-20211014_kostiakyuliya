import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    let elem = this.render();
    this.elem = elem;
    let top_image = elem.querySelector(`.card__image`);
    let price = elem.querySelector(`.card__price`);
    let name = elem.querySelector(`.card__title`);
    
    top_image.setAttribute(`src`, `/assets/images/products/${product.image}`);
    price.innerHTML = `€${product.price.toFixed(2)}`;
    name.innerHTML = `${product.name}`;

    let button = elem.querySelector(`button`);

    button.addEventListener("click", function() {
      
      let event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: product.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
      });
      button.dispatchEvent(event);
      //console.log(event);
    });
  
  }
  render(){
    const elem = createElement(`
    <div class="card">
      <div class="card__top">
        <img class="card__image" alt="product">
        <span class="card__price"></span>
      </div>
      <div class="card__body">
        <div class="card__title"></div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `);
    return elem;
  }
}