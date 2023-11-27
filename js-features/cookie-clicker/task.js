document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы из DOM
    const clickCounterElement = document.getElementById("clicker__counter");
    const clickSpeedElement = document.getElementById("clicker__speed");
    const cookieElement = document.getElementById("cookie");
  
    // Инициализируем счетчик кликов
    let clickCount = 0;
  
    // Инициализируем время последнего клика
    let lastClickTime = new Date().getTime();
  
    // Обработчик клика по печеньке
    cookieElement.addEventListener("click", function () {
      // Увеличиваем счетчик кликов
      clickCount++;
  
      // Обновляем значение счетчика на странице
      clickCounterElement.textContent = clickCount;
  
      // Получаем текущее время
      const currentTime = new Date().getTime();
  
      // Рассчитываем время, прошедшее с последнего клика в секундах
      const elapsedTimeInSeconds = (currentTime - lastClickTime) / 1000;
  
      // Рассчитываем скорость клика
      const clickSpeed = 1 / elapsedTimeInSeconds;
  
      // Выводим скорость клика на страницу
      clickSpeedElement.textContent = `Скорость клика: ${clickSpeed.toFixed(2)} клика в секунду`;
  
      // Обновляем время последнего клика
      lastClickTime = currentTime;
  
      // Чередуем уменьшение и увеличение размера печеньки
      if (cookieElement.width > 150) {
        cookieElement.width -= 10;
        cookieElement.height -= 10;
      } else {
        cookieElement.width += 10;
        cookieElement.height += 10;
      }
    });
  });
  