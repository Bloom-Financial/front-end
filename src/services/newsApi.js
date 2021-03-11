export const findArticles = (search) => {
  return fetch(`https://mysterious-basin-06930.herokuapp.com/news?q=${search}
  `)
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
