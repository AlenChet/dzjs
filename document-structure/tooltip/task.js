document.addEventListener('DOMContentLoaded', function () {
    let tooltipTriggers = document.querySelectorAll('.has-tooltip');
  
    tooltipTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
  
        let tooltip = createTooltip(trigger); // Создаем подсказку
  
        // Добавляем подсказку в документ
        document.body.appendChild(tooltip);
  
        // Устанавливаем позицию подсказки
        positionTooltip(trigger, tooltip);
  
        // Добавляем класс для отображения подсказки
        tooltip.classList.add('tooltip_active');
  
        // Устанавливаем обработчик для скрытия подсказки при клике за её пределами
        document.addEventListener('click', function hideTooltip(e) {
          if (e.target !== trigger && e.target !== tooltip) {
            tooltip.classList.remove('tooltip_active');
            document.removeEventListener('click', hideTooltip); // Удаляем обработчик после первого клика вне элемента
          }
        });
      });
    });
  
    function createTooltip(trigger) {
      let tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.innerText = trigger.getAttribute('title');
      return tooltip;
    }
  
    function positionTooltip(trigger, tooltip) {
      let rect = trigger.getBoundingClientRect();
      tooltip.style.left = rect.left + window.scrollX + 'px';
      tooltip.style.top = rect.bottom + window.scrollY + 'px';
    }
  });
  
  