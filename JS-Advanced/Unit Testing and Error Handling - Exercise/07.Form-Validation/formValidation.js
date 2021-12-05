function validate() {
  const username = document.getElementById(`username`);
  const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
  const password = document.getElementById(`password`);
  const confirmPassword = document.getElementById(`confirm-password`);
  const passwordPattern = /^\w{5,15}$/;
  const email = document.getElementById(`email`);
  const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
  const submitBtn = document.getElementById(`submit`);
  submitBtn.addEventListener("click", onClick);
  const checkBox = document.getElementById(`company`);
  checkBox.addEventListener("change", onChange);

  function onClick(ev) {
    ev.preventDefault();
    const validOut = [];

    if (usernamePattern.exec(username.value) === null) {
      username.style.borderColor = "red";
      validOut.push(false);
    } else {
      username.style.borderColor = "";
      validOut.push(true);
    }

    if (
      passwordPattern.exec(password.value) != null &&
      passwordPattern.exec(confirmPassword.value) != null &&
      password.value === confirmPassword.value
    ) {
      password.style.borderColor = "";
      confirmPassword.style.borderColor = "";
      validOut.push(true);
    } else {
      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
      validOut.push(false);
    }

    if (emailPattern.exec(email.value) === null) {
      email.style.borderColor = "red";
      validOut.push(false);
    } else {
      email.style.borderColor = "";
      validOut.push(true);
    }

    if (checkBox.checked) {
      const companyNum = document.getElementById(`companyNumber`);
      const isValid =
        Number(companyNum.value) >= 1000 && Number(companyNum.value) <= 9999;
      if (isValid) {
        companyNum.style.borderColor = "";
        validOut.push(true);
      } else {
        companyNum.style.borderColor = "red";
        validOut.push(false);
      }
    }
    if (validOut.includes(false)) {
      document.getElementById(`valid`).style.display = "none";
    } else {
      document.getElementById(`valid`).style.display = "block";
    }
  }

  function onChange(ev) {
    const companyInfo = document.getElementById(`companyInfo`);
    if (ev.target.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  }
}
