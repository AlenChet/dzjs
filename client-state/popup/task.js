document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("subscribe-modal");
  const closeButton = modal.querySelector(".modal__close_times");

  const isModalClosed = getCookie("modalClosed");

  if (!isModalClosed) {
      modal.classList.add("modal_active");
  }

  closeButton.addEventListener("click", function () {
      modal.classList.remove("modal_active");

      setCookie("modalClosed", true);
  });

  function setCookie(name, value, days = 365) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  function getCookie(name) {
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookies = decodedCookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i];
          while (cookie.charAt(0) === ' ') {
              cookie = cookie.substring(1);
          }
          if (cookie.indexOf(name + "=") === 0) {
              return cookie.substring(name.length + 1, cookie.length);
          }
      }
      return null;
  }
});

  