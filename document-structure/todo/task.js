document.addEventListener('DOMContentLoaded', function () {
    let tasksForm = document.getElementById('tasks__form');
    let taskInput = document.getElementById('task__input');
    let tasksList = document.getElementById('tasks__list');
  
    // Обработчик события для добавления задачи
    tasksForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Получаем значение из поля ввода
      let taskText = taskInput.value.trim();
  
      // Если поле не пустое, добавляем задачу
      if (taskText !== '') {
        // Создаем элемент задачи
        let taskElement = document.createElement('div');
        taskElement.classList.add('task');
  
        // Создаем элемент заголовка
        let titleElement = document.createElement('div');
        titleElement.classList.add('task__title');
        titleElement.textContent = taskText;
  
        // Создаем кнопку удаления
        let removeButton = document.createElement('a');
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';
  
        // Обработчик события для удаления задачи
        removeButton.addEventListener('click', function () {
          tasksList.removeChild(taskElement);
        });
  
        // Добавляем элементы к задаче
        taskElement.appendChild(titleElement);
        taskElement.appendChild(removeButton);
  
        // Добавляем задачу к списку
        tasksList.appendChild(taskElement);
  
        // Очищаем поле ввода
        taskInput.value = '';
      }
    });
  });
  