function solve() {
  Array.from(document.querySelectorAll(`.answer-text`)).map((x) =>
    x.addEventListener("click", transition)
  );

  const correctAnswers = [
    "Обичам мъжа",
    "Пробвам quiz-чето на Бъбито",
    "ЯКОООООО",
  ];
  let rightAnswers = 0;
  let index = 0;

  function transition(e) {
    if (correctAnswers.includes(e.target.textContent)) {
      rightAnswers++;
    }

    let currSection = document.querySelectorAll("section")[index];
    currSection.style.display = "none";

    if (document.querySelectorAll("section")[index + 1] != undefined) {
      let nextSection = document.querySelectorAll(`section`)[index + 1];
      nextSection.style.display = "block";
      index++;
    } else {
      document.querySelector("#results").style.display = "block";
      if (rightAnswers == 3) {
        document.querySelector("#results h1").textContent =
          "Ти си истинско Бъби! Обичам теб.";
      } else if (rightAnswers == 1) {
        document.querySelector(
          "#results h1"
        ).textContent = `Ама че ${rightAnswers} верен отговор`;
      } else if (rightAnswers == 2) {
        document.querySelector(
          "#results h1"
        ).textContent = `Ама че ${rightAnswers} верни отговораа`;
      } else {
        document.querySelector("#results h1").textContent = `Ама че глупавичка`;
      }
    }
  }
}
