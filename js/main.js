(function () {
    "use strict";

    ui();
    mainSlider();
    carousels();
    priceCalculator();


    function ui() {
        $(".navbar-toggler").on('click', function() {
            $(this).toggleClass("is-opened");
        });
    }

    function mainSlider() {
        let swiperItem = document.querySelector(".mainSwiper");

        if (!swiperItem) {
            return false;
        }

        var swiper = new Swiper(".mainSwiper", {
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

        if (pausePlayBtn) {
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
        }
    }

    function priceCalculator() {
        if (!document.getElementById("eventPrice")) {
            return false;
        }

        var plusButton = document.querySelector(".js-increment");
        var minusButton = document.querySelector(".js-decrement");

        var counterNumber = document.querySelector(".counterNumber");
        var eventPrice = document.getElementById("eventPrice");

        var counterValue = parseInt(counterNumber.textContent);
        var priceValue = parseFloat(eventPrice.textContent);
        const currentPrice = parseFloat(eventPrice.textContent);

        plusButton.addEventListener("click", function () {
            counterValue++;
            counterNumber.textContent = counterValue;

            priceValue += currentPrice;
            eventPrice.textContent =
                priceValue.toFixed(2).replace(".", ",") + " €";
        });

        minusButton.addEventListener("click", function () {
            if (counterValue > 1) {
                counterValue--;
                counterNumber.textContent = counterValue;

                priceValue -= currentPrice;
                eventPrice.textContent =
                    priceValue.toFixed(2).replace(".", ",") + " €";
            }
        });
    }

    function carousels() {
        let swiperItem = document.querySelector(".interviews-carousel");

        if (swiperItem) {
            new Swiper(".interviews-carousel", {
                slidesPerView:1.5,
                spaceBetween: 15,

                navigation: {
                    nextEl: ".interviews-carousel .swiper-button-next",
                    prevEl: ".interviews-carousel .swiper-button-prev",
                },
                breakpoints: {
                    // when window width is >= 640px
                    667: {
                      slidesPerView: 3.75,
                      spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 4.75,
                        spaceBetween: 15
                      }
                  }
            });
        }

        new Swiper(".topselling-carousel", {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".topselling-carousel .swiper-button-next",
              prevEl: ".topselling-carousel .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
              }
        });

        new Swiper(".currentweek-carousel", {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".currentweek-carousel .swiper-button-next",
              prevEl: ".currentweek-carousel .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
              }
        });

        new Swiper(".artist-carousel", {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".artist-carousel .swiper-button-next",
              prevEl: ".artist-carousel .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
              }
        });

        new Swiper(".recently-carousel", {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".recently-carousel .swiper-button-next",
              prevEl: ".recently-carousel .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
              }
        });

        new Swiper(".podcast-carousel", {
            loop: false,
            slidesPerView: 1.5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".podcast-carousel .swiper-button-next",
              prevEl: ".podcast-carousel .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                992: {
                  slidesPerView: 3.75,
                  spaceBetween: 20
                },
                1200: {
                    slidesPerView: 4.75,
                    spaceBetween: 20
                  }
              }
        });

        new Swiper(".selection-carousel", {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".selection-carousel .swiper-button-next",
              prevEl: ".selection-carousel .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
              }
        });

        new Swiper(".allshow-carousel", {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".allshow-carousel .swiper-button-next",
              prevEl: ".allshow-carousel .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
              }
        });

        new Swiper(".lastnews-carousel", {
            loop: false,
            slidesPerView: 1.5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".lastnews-carousel .swiper-button-next",
              prevEl: ".lastnews-carousel .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 640px
                992: {
                  slidesPerView: 3.75,
                  spaceBetween: 20
                },
                1200: {
                    slidesPerView: 4.75,
                    spaceBetween: 20
                  }
              }
        });
    }
})();
