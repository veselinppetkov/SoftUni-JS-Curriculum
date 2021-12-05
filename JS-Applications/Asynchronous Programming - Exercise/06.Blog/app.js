function attachEvents() {}
document.getElementById(`btnLoadPosts`).addEventListener("click", getAllPosts);
document.getElementById(`btnViewPost`).addEventListener("click", displayPost);
attachEvents();

async function displayPost() {
  const postTitle = document.getElementById(`post-title`);
  const postBody = document.getElementById(`post-body`);
  const ulEl = document.getElementById(`post-comments`);

  postTitle.textContent = `Loading...`;
  postBody.textContent = "";
  ulEl.replaceChildren();

  const selectedId = document.getElementById(`posts`).value;

  const [post, comments] = await Promise.all([
    getPostById(selectedId),
    getCommentsById(selectedId),
  ]);

  postTitle.textContent = post.title;
  postBody.textContent = post.body;

  comments.forEach((c) => {
    const liEl = document.createElement(`li`);
    liEl.textContent = c.text;
    ulEl.appendChild(liEl);
  });
}

async function getAllPosts() {
  const url = `http://localhost:3030/jsonstore/blog/posts`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    const selectedEl = document.getElementById(`posts`);
    Object.values(data).forEach((p) => {
      const optionEl = document.createElement(`option`);
      optionEl.textContent = p.title;
      optionEl.value = p.id;

      selectedEl.appendChild(optionEl);
    });
  } catch (err) {
    alert(err.message);
  }
}

async function getPostById(postId) {
  const url = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    alert(err.message);
  }
}

async function getCommentsById(postId) {
  const url = `http://localhost:3030/jsonstore/blog/comments`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    let comments = Object.values(data).filter((c) => c.postId == postId);

    return comments;
  } catch (err) {
    alert(err.message);
  }
}
