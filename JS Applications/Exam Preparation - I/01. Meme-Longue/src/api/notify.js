const errorBox = document.getElementById(`errorBox`);
const span = document.querySelector(`span`);

export function notify(msg) {
  span.textContent = msg;
  errorBox.style.display = "block";

  setTimeout(() => (errorBox.style.display = "none"), 3000);
}
