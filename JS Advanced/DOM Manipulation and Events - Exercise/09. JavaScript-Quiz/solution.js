function solve() {
  Array.from(document.querySelectorAll(`.answer-text`)).map((x) =>
    x.addEventListener("click", transition)
  );

  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
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
          "You are recognized as top JavaScript fan!";
      } else {
        document.querySelector(
          "#results h1"
        ).textContent = `You have ${rightAnswers} right answers`;
      }
    }
  }
}
