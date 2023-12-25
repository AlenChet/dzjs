document.addEventListener("DOMContentLoaded", function () {
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");

    function fetchData(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
  
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const responseData = JSON.parse(xhr.responseText);
          callback(responseData);
        } else {
          console.error("Ошибка при загрузке данных");
        }
      };
  
      xhr.onerror = function () {
        console.error("Ошибка при выполнении запроса");
      };
  
      xhr.send();
    }
  
    function updatePoll(data) {
      pollAnswers.innerHTML = "";
      pollTitle.textContent = data.data.title;
  
      data.data.answers.forEach((answer) => {
        const answerButton = document.createElement("button");
        answerButton.classList.add("poll__answer");
        answerButton.textContent = answer;
  
        answerButton.addEventListener("click", function () {
          alert("Спасибо, ваш голос засчитан!");
          fetchData("https://students.netoservices.ru/nestjs-backend/poll", updatePoll);
        });
  
        pollAnswers.appendChild(answerButton);
      });
    }
    fetchData("https://students.netoservices.ru/nestjs-backend/poll", updatePoll);
  });
  
  