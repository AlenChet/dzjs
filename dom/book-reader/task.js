document.addEventListener("DOMContentLoaded", function () {
    var fontSizeControls = document.querySelectorAll(".book__control_font-size a");
  
    // Функция для изменения размера шрифта
    function changeFontSize(event) {
      event.preventDefault();
  
      // Убираем класс font-size_active у всех элементов
      fontSizeControls.forEach(function (control) {
        control.classList.remove("font-size_active");
      });
  
      // Добавляем класс font-size_active к текущему элементу
      var currentControl = event.target;
      currentControl.classList.add("font-size_active");
  
      // Получаем значение размера из data-size атрибута
      var newSize = currentControl.getAttribute("data-size");
  
      // Убираем все классы, связанные с размером шрифта, из элемента с классом "book"
      var bookElement = document.getElementById("book");
      bookElement.classList.remove("book_fs-small", "book_fs-big");
  
      // Добавляем соответствующий класс в зависимости от выбранного размера
      if (newSize === "small") {
        bookElement.classList.add("book_fs-small");
      } else if (newSize === "big") {
        bookElement.classList.add("book_fs-big");
      }
    }
  
    // Добавляем обработчик события клика к каждому элементу с классом "font-size"
    fontSizeControls.forEach(function (control) {
      control.addEventListener("click", changeFontSize);
    });
  });  