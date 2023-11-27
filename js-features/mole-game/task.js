document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы из DOM
    const deadCounterElement = document.getElementById("dead");
    const lostCounterElement = document.getElementById("lost");
    const statusElement = document.getElementById("status");
  
    // Инициализируем счетчики
    let deadCount = 0;
    let lostCount = 0;
  
    // Функция для получения элемента по индексу
    const getHole = (index) => document.getElementById(`hole${index}`);
  
    // Обработчик клика по лунке
    const handleMoleClick = (event) => {
      // Проверяем наличие класса hole_has-mole
      if (event.target.classList.contains("hole_has-mole")) {
        // Увеличиваем счетчик убитых кротов
        deadCount++;
        // Обновляем значение на странице
        deadCounterElement.textContent = deadCount;
  
        // Проверяем условие победы
        if (deadCount === 10) {
          const restartGame = confirm("Вы победили! Начать заново?");
          if (restartGame) {
            resetGame();
            window.location.reload();
          }
        }
      } else {
        // Увеличиваем счетчик промахов
        lostCount++;
        // Обновляем значение на странице
        lostCounterElement.textContent = lostCount;
  
        // Проверяем условие поражения
        if (lostCount === 5) {
          const restartGame = confirm("Игра окончена. Вы проиграли. Начать заново?");
          if (restartGame) {
            resetGame();
            window.location.reload();
          }
        }
      }
    };
  
    // Добавляем обработчик клика для каждой лунки
    for (let i = 1; i <= 9; i++) {
      getHole(i).addEventListener("click", handleMoleClick);
    }
  
    // Функция сброса игры
    const resetGame = () => {
      deadCount = 0;
      lostCount = 0;
      deadCounterElement.textContent = 0;
      lostCounterElement.textContent = 0;
      statusElement.textContent = "Убито кротов: 0\nПромахов: 0";
    };
  });  