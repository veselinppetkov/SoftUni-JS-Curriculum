function attachGradientEvents() {
  const box = document.getElementById(`gradient`);
  box.addEventListener(`mousemove`, onMove);
  let result = document.getElementById(`result`);

  function onMove(ev) {
    const offset = Math.floor((ev.offsetX / ev.target.clientWidth) * 100);
    result.textContent = `${offset}%`;
  }
}
