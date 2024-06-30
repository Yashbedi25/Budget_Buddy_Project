// const progressBar = document.getElementById('progress-bar');
// const progressBarFill = document.getElementById('progress-fill');
// const progressText = document.getElementById('progress-text');

// // Update the progress bar
// function updateProgressBar(progress) {
//   progressBarFill.style.width = progress + '%';
//   progressText.textContent = progress + '%';
// }

// // Start the progress bar
// updateProgressBar(73); // Initial progress



var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});