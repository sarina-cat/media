const swiper = new Swiper(".carousel", {
  pagination: {
    el: ".swiper-pagination",
  },
  // 前後スライドボタンを表示
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true, // ループの有効化
});