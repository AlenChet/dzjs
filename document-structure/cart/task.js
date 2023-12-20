document.addEventListener('DOMContentLoaded', function () {
    // Находим элементы DOM
    let products = document.querySelectorAll('.product');
    let cartProducts = document.querySelector('.cart__products');
  
    // Обработчик события для кнопок увеличения/уменьшения количества товаров
    products.forEach(function (product) {
      let quantityValue = product.querySelector('.product__quantity-value');
      let addButton = product.querySelector('.product__add');
  
      product.addEventListener('click', function (event) {
        let target = event.target;
  
        // Уменьшение количества товаров
        if (target.classList.contains('product__quantity-control_dec')) {
          let quantity = parseInt(quantityValue.textContent, 10);
          if (quantity > 1) {
            quantityValue.textContent = quantity - 1;
          }
        }
  
        // Увеличение количества товаров
        if (target.classList.contains('product__quantity-control_inc')) {
          let quantity = parseInt(quantityValue.textContent, 10);
          quantityValue.textContent = quantity + 1;
        }
  
        // Добавление товара в корзину
        if (target.classList.contains('product__add')) {
          let productId = product.dataset.id;
          let productTitle = product.querySelector('.product__title').textContent;
          let productImageSrc = product.querySelector('.product__image').src;
  
          // Проверяем, есть ли товар уже в корзине
          let existingCartItem = cartProducts.querySelector('.cart__product[data-id="' + productId + '"]');
  
          if (existingCartItem) {
            // Если товар уже в корзине, увеличиваем количество
            let cartProductCount = existingCartItem.querySelector('.cart__product-count');
            let newQuantity = parseInt(cartProductCount.textContent, 10) + parseInt(quantityValue.textContent, 10);
            cartProductCount.textContent = newQuantity;
          } else {
            // Иначе добавляем новый товар в корзину
            let cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;
  
            let cartProductImage = document.createElement('img');
            cartProductImage.classList.add('cart__product-image');
            cartProductImage.src = productImageSrc;
  
            let cartProductCount = document.createElement('div');
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent = quantityValue.textContent;
  
            cartProduct.appendChild(cartProductImage);
            cartProduct.appendChild(cartProductCount);
  
            cartProducts.appendChild(cartProduct);
          }
        }
      });
    });
  });
  