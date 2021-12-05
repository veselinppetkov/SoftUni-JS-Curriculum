function lockedProfile() {
  Array.from(document.getElementsByTagName(`button`)).forEach((btn) =>
    btn.addEventListener("click", onToggle)
  );

  function onToggle({ target }) {
    const hiddenInfo = target.parentNode.querySelector(`div`);

    const isActive = target.parentNode.querySelector(
      `input[type="radio"][value="unlock"]`
    ).checked;

    if (isActive) {
      if (target.textContent == "Show more") {
        hiddenInfo.style.display = "block";
        target.textContent = "Hide it";
      } else {
        hiddenInfo.style.display = "";
        target.textContent = "Show more";
      }
    }
  }
}
