function getArticleGenerator(articles) {
  const div = document.querySelector(`#content`);
  function showNext() {
    if (articles.length > 0) {
      let article = document.createElement(`article`);
      article.textContent = articles.shift();
      div.appendChild(article);
    }
  }
  return showNext;
}
