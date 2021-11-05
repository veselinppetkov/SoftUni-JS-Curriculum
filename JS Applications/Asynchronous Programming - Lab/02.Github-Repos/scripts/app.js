function loadRepos() {
  let username = document.getElementById(`username`).value;
  const list = document.getElementById(`repos`);

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((repo) => {
      if (repo.ok == false) {
        throw new Error(`${repo.status} ${repo.statusText}`);
      }
      return repo.json();
    })
    .then(handleResponse)
    .catch(handleError);

  function handleResponse(data) {
    list.innerHTML = "";
    for (let repo of data) {
      let liEl = document.createElement(`li`);
      liEl.innerHTML = `<a href="${repo.html_url}"> ${repo.full_name} </a>`;
      list.appendChild(liEl);
    }
  }
  function handleError(error) {
    list.innerHTML = "";
    list.textContent = error.message;
  }
}
