function attachEventsListeners() {
  const converter = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function convert(value, unit) {
    const inDays = value / converter[unit];
    return {
      days: inDays,
      hours: inDays * converter.hours,
      minutes: inDays * converter.minutes,
      seconds: inDays * converter.seconds,
    };
  }

  const buttons = Array.from(document.querySelectorAll(`input[type="button"]`));
  buttons.forEach((b) => b.addEventListener("click", onClick));

  function onClick(ev) {
    const input = ev.target.parentNode.querySelector(`input[type="text"]`);
    const time = convert(Number(input.value), input.id);
    document.getElementById(`days`).value = time.days;
    document.getElementById(`hours`).value = time.hours;
    document.getElementById(`minutes`).value = time.minutes;
    document.getElementById(`seconds`).value = time.seconds;
  }
}
