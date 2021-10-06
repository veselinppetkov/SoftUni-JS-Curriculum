function encodeAndDecodeMessages() {
  let [sendArea, readArea] = document.querySelectorAll(`textarea`);
  let [encodeBtn, decodeBtn] = document.querySelectorAll(`button`);
  encodeBtn.addEventListener("click", encode);
  decodeBtn.addEventListener("click", decode);

  function encode() {
    let text = sendArea.value
      .split("")
      .map((el) => el.charCodeAt() + 1)
      .map((el) => String.fromCharCode(el))
      .join("");
    readArea.value = text;
    sendArea.value = "";
  }
  function decode() {
    let text = readArea.value
      .split("")
      .map((el) => el.charCodeAt() - 1)
      .map((el) => String.fromCharCode(el))
      .join("");
    readArea.value = text;
  }
}
