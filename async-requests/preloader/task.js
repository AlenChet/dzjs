document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.getElementById("items");
    const loader = document.getElementById("loader");
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses", true);
  
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const responseData = JSON.parse(xhr.responseText);
        updateCurrencyItems(responseData.response.Valute);
      } else {
        console.error("Ошибка при загрузке данных о курсе валют");
      }
  
      loader.classList.remove("loader_active");
    };
  
    xhr.onerror = function () {
      console.error("Ошибка при выполнении запроса");
    };
  
    loader.classList.add("loader_active");
    xhr.send();
  
    function updateCurrencyItems(currencyData) {
      for (const currencyCode in currencyData) {
        const currency = currencyData[currencyCode];
        
        // Используем шаблонные строки для компактности
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
          <div class="item__code">${currency.CharCode}</div>
          <div class="item__value">${currency.Value.toFixed(2)}</div>
          <div class="item__currency">руб.</div>
        `;
        
        itemsContainer.appendChild(itemElement);
      }
    }
  });