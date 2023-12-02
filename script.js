var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });