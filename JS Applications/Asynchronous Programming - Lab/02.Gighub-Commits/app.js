function loadCommits() {
  const username = document.getElementById(`username`).value;
  const repository = document.getElementById(`repo`).value;
  const list = document.getElementById(`commits`);

  fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
    .then((response) => {
      if (response.ok == false) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(handleResponse)
    .catch(handleError);

  function handleResponse(data) {
    list.innerHTML = "";
    for (let entry of data) {
      let newLi = document.createElement(`li`);
      newLi.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
      list.appendChild(newLi);
    }
  }

  function handleError(error) {
    list.innerHTML = "";
    let newLi = document.createElement(`li`);
    newLi.textContent = `Error: ${error.message} (Not Found)`;
    list.appendChild(newLi);
  }
}
