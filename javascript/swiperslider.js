
(function() {

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

  });

  var pausePlayBtn = document.getElementById("swiperPausePlayBtn");
  var isPaused = false;

  pausePlayBtn.addEventListener("click", function () {

    if (isPaused) {
      swiper.autoplay.start();
      pausePlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      swiper.autoplay.stop();
      pausePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
    isPaused = !isPaused;

  });

})();



