function solve() {
  const departBtn = document.getElementById(`depart`);
  const arriveBtn = document.getElementById(`arrive`);
  const info = document.querySelector(`#info span`);

  let stop = {
    next: "depot",
  };

  async function depart() {
    info.textContent = `Loading...`;
    departBtn.disabled = true;

    const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

    try {
      const response = await fetch(url);
      stop = await response.json();

      info.textContent = `Next stop ${stop.name}`;
      arriveBtn.disabled = false;
    } catch (error) {
      info.textContent = `Error`;
    }
  }

  async function arrive() {
    info.textContent = `Arriving at ${stop.name}`;

    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
