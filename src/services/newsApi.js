export const findArticles = (search) => {
  return fetch(`http://localhost:7890/news?q=${search}`)
    .then((res) => res.json())
    .then(({ articles }) =>
      articles.map((article) => ({
        title: article.title,
        url: article.url,
        description: article.description,
        img: article.urlToImage,
      }))
    );
};
