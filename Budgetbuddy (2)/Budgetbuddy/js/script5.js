const progressBar = document.getElementById('progress-bar');
const progressBarFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

// Update the progress bar
function updateProgressBar(progress) {
  progressBarFill.style.width = progress + '%';
  progressText.textContent = progress + '%';
}

// Start the progress bar
updateProgressBar(73); // Initial progress



