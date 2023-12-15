document.addEventListener("DOMContentLoaded", function () {
    var rotatorCases = document.querySelectorAll(".rotator__case");
    var currentIndex = 0;
  
    function rotateText() {
      rotatorCases.forEach(function (caseElement) {
        caseElement.classList.remove("rotator__case_active");
      });
  
      rotatorCases[currentIndex].classList.add("rotator__case_active");
      currentIndex = (currentIndex + 1) % rotatorCases.length;
    }

    setInterval(rotateText, 1000);
  });  