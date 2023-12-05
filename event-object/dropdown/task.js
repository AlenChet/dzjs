document.addEventListener("DOMContentLoaded", function () {
    // Находим все элементы с классом dropdown
    const dropdowns = document.querySelectorAll(".dropdown");

    // Перебираем каждую кнопку с выпадающим списком
    dropdowns.forEach(function (dropdown) {
        // Находим элементы внутри текущего dropdown
        const valueElement = dropdown.querySelector(".dropdown__value");
        const listElement = dropdown.querySelector(".dropdown__list");

        // Добавляем обработчик события для кнопки
        valueElement.addEventListener("click", function () {
            // Переключаем класс dropdown__list_active для отображения/скрытия списка
            listElement.classList.toggle("dropdown__list_active");
        });

        // Добавляем обработчик события для каждого элемента списка
        const items = dropdown.querySelectorAll(".dropdown__item");
        items.forEach(function (item) {
            // Обработчик события для выбора пункта меню
            item.addEventListener("click", function (event) {
                // Предотвращаем переход по ссылке
                event.preventDefault();

                // Закрываем список
                listElement.classList.remove("dropdown__list_active");

                // Устанавливаем новое значение в dropdown__value
                valueElement.textContent = item.textContent;
            });
        });
    });
});
