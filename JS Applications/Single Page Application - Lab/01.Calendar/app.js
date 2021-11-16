const calendar = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Noe: 11,
  Dec: 12,
};
const yearsCalendar = document.getElementById(`years`);

function showPreview(section) {
  document.body.innerHTML = "";
  document.body.appendChild(section);
}

const years = [...document.querySelectorAll(`.monthCalendar`)].reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {}
);

const months = [...document.querySelectorAll(`.daysCalendar`)].reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {}
);

showPreview(yearsCalendar);

yearsCalendar.addEventListener(`click`, (event) => {
  if (event.target.tagName == "TD" || event.target.tagName == "DIV") {
    event.stopImmediatePropagation();
    const selectedYear = `year-${event.target.textContent.trim()}`;
    showPreview(years[selectedYear]);
  }
});

document.body.addEventListener(`click`, (event) => {
  let target = event.target;
  if (target.tagName == "CAPTION") {
    const sectionId = target.parentNode.parentNode.id;
    if (sectionId.includes(`year-`)) {
      showPreview(yearsCalendar);
    } else if (sectionId.includes(`month-`)) {
      const yearId = `year-${sectionId.split("-")[1]}`;
      showPreview(years[yearId]);
    }
  } else if (target.tagName == "TD" || target.tagName == "DIV") {
    const monthName = target.textContent.trim();
    if (calendar.hasOwnProperty(monthName)) {
      let parent = target.parentNode;
      while (parent.tagName != "TABLE") {
        parent = parent.parentNode;
      }
      const year = parent.querySelector(`caption`).textContent.trim();
      const selectedMonth = `month-${year}-${calendar[monthName]}`;
      showPreview(months[selectedMonth]);
    }
  }
});
