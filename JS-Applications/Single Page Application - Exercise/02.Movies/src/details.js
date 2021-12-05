import { e, showView } from "./dom.js";
import { showHome } from "./home.js";
import { showEdit } from "./edit.js";

const section = document.getElementById(`movie-example`);
const userData = JSON.parse(localStorage.getItem(`userData`));
section.remove();

export function showDetails(id) {
  showView(section);
  getMovie(id);
}

async function getMovie(id) {
  section.replaceChildren(e(`p`, {}, "Loading..."));

  const requests = [
    fetch(`http://localhost:3030/data/movies/${id}`),
    fetch(
      `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
    ),
  ];

  if (userData != null) {
    requests.push(
      fetch(
        `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`
      )
    );
  }

  const [movieRes, likesRes, hasLikedRes] = await Promise.all(requests);

  const [movieData, numOfLikes, hasLiked] = await Promise.all([
    movieRes.json(),
    likesRes.json(),
    hasLikedRes && hasLikedRes.json(),
  ]);

  section.replaceChildren(setDetails(movieData, numOfLikes, hasLiked));
}

function setDetails(movie, likes, hasLiked) {
  const controls = e(
    `div`,
    { className: "col-md-4 text-center" },
    e(`h3`, { className: "my-3" }, "Movie Description"),
    e(`p`, {}, `${movie.description}`)
  );

  const userData = JSON.parse(localStorage.getItem(`userData`));

  if (userData != null) {
    if (userData.id == movie._ownerId) {
      controls.appendChild(
        e(
          `a`,
          {
            className: "btn btn-danger",
            href: "#",
            onclick: (event) => onDelete(event, movie._id),
          },
          "Delete"
        )
      );
      controls.appendChild(
        e(
          `a`,
          {
            className: "btn btn-warning",
            href: "#",
            onclick: () => showEdit(movie._id),
          },
          "Edit"
        )
      );
    } else {
      if (hasLiked.length > 0) {
        controls.appendChild(
          e(
            `a`,
            { className: "btn btn-primary", href: "#", onclick: onUnlike },
            "Unlike"
          )
        );
      } else {
        controls.appendChild(
          e(
            `a`,
            { className: "btn btn-primary", href: "#", onclick: onLike },
            "Like"
          )
        );
      }
    }
  }

  controls.appendChild(
    e(`span`, { className: "enrolled-span" }, `Liked: ${likes}`)
  );

  const element = e(
    `div`,
    { className: "container" },
    e(
      `div`,
      { className: "row bg-light text-dark" },
      e(`h1`, {}, `Movie title: ${movie.title}`),
      e(
        `div`,
        { className: "col-md-8" },
        e(`img`, {
          className: "img-thumbnail",
          alt: "Movie",
          src: `${movie.img}`,
        })
      ),
      controls
    )
  );

  return element;

  async function onLike() {
    await fetch(`http://localhost:3030/data/likes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.token,
      },
      body: JSON.stringify({
        movieId: movie._id,
      }),
    });

    showDetails(movie._id);
  }

  async function onUnlike() {
    const likeId = hasLiked[0]._id;

    await fetch(`http://localhost:3030/data/likes/${likeId}`, {
      method: "delete",
      headers: {
        "X-Authorization": userData.token,
      },
    });

    showDetails(movie._id);
  }
}

async function onDelete(event, id) {
  event.preventDefault();
  const confirmed = confirm("Are you sure you want to delete this movie?");

  try {
    if (confirmed) {
      const res = await fetch("http://localhost:3030/data/movies/" + id, {
        method: "delete",
        headers: {
          "X-Authorization": userData.token,
        },
      });

      if (res.ok) {
        alert("Movie deleted");
        showHome();
      } else {
        const error = await res.json();
        throw new Error(error.message);
      }
    }
  } catch (err) {
    alert(err.message);
  }
}
