document.addEventListener("DOMContentLoaded", () => {
  const timerDisplay = document.getElementById("timer-display");
  const startButton = document.getElementById("start-btn");
  const resetButton = document.getElementById("reset-btn");

  let timeLeft = 1500; // 25 minutes in seconds
  let timerId;

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  function updateTimer() {
    timerDisplay.textContent = formatTime(timeLeft);

    if (timeLeft === 0) {
      clearInterval(timerId);
      alert("Time's up!");
    }

    timeLeft--;
  }

  startButton.addEventListener("click", () => {
    if (timerId) {
      // Timer is already running, so stop it
      clearInterval(timerId);
      timerId = null;
      startButton.textContent = "Start";
    } else {
      // Timer is not running, so start it
      timerId = setInterval(updateTimer, 1000);
      startButton.textContent = "Stop";
    }
  });

  resetButton.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 1500;
    timerDisplay.textContent = formatTime(timeLeft);
    startButton.textContent = "Start";
  });
});
