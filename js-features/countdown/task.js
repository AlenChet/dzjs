document.addEventListener("DOMContentLoaded", function () {
    // Получаем элемент таймера
    const timerElement = document.getElementById("timer");
  
    // Устанавливаем стартовое значение таймера в секундах
    let remainingTime = 59;
  
    // Функция обновления таймера
    function updateTimer() {
      // Преобразуем оставшееся время в формат hh:mm:ss
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;
  
      // Форматируем значения, чтобы они были всегда двузначными
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
  
      // Устанавливаем новое значение таймера на странице
      timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  
      // Уменьшаем оставшееся время на 1 секунду
      remainingTime--;
  
      // Проверяем, завершен ли таймер
      if (remainingTime < 0) {
        // Если таймер завершен, выводим уведомление
        alert("Вы победили в конкурсе!");
        
        document.body.innerHTML = "<h1>Приветствуем победителя по жизни!</h1>";
        
        // Останавливаем интервал обновления таймера
        clearInterval(timerInterval);
      }
    }
  
    // Обновляем таймер каждую секунду
    const timerInterval = setInterval(updateTimer, 1000);
});
  