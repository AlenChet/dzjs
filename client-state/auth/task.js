document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin__form");
    const welcomeBlock = document.getElementById("welcome");
    const userIdSpan = document.getElementById("user_id");
  
    const userId = localStorage.getItem("userId");

    if (userId) {
      showWelcomeBlock(userId);
    }
  
    signinForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(signinForm);
  
      fetch("https://students.netoservices.ru/nestjs-backend/auth", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("userId", data.user_id);
            
            showWelcomeBlock(data.user_id);
          } else {
            alert("Неверный логин/пароль");
          }
        })
        .catch((error) => console.error("Ошибка:", error));
    });
  
    function showWelcomeBlock(userId) {
      userIdSpan.textContent = userId;

      welcomeBlock.classList.add("welcome_active");
  
      signinForm.parentElement.classList.remove("signin_active");
    }
  });
  