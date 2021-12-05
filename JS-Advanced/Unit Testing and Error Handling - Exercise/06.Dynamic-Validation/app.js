function validate() {
  const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
  const input = document.getElementById(`email`);
  input.addEventListener("change", onChange);

  function onChange(ev) {
    console.log(ev.target.value);
    if (!pattern.test(ev.target.value)) {
      input.className = "error";
    } else {
      input.value = "";
      input.className = "";
    }
  }
}
