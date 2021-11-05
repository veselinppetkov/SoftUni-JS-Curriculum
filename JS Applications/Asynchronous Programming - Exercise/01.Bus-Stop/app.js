async function getInfo() {
  const stopId = document.getElementById(`stopId`).value;
  const stopDiv = document.getElementById(`stopName`);
  const baseUrl = `http://localhost:3030/jsonstore/bus/businfo/`;
  const buses = document.getElementById(`buses`);

  try {
    stopDiv.textContent = `Loading...`;
    buses.replaceChildren();
    const response = await fetch(baseUrl + stopId);
    if (response.status != 200) {
      throw new Error(`Stop ID not found`);
    }

    const data = await response.json();
    stopDiv.textContent = data.name;

    Object.entries(data.buses).forEach((entry) => {
      let newLi = document.createElement(`li`);
      newLi.textContent = `Bus ${entry[0]} arrives in ${entry[1]} minutes`;
      buses.appendChild(newLi);
    });
  } catch (error) {
    stopDiv.textContent = "Error";
  }
}
