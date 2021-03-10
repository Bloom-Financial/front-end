export const findArticles = (search) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${search}&
    language=en&
    pageSize=50&
    apiKey=${process.env.NEWS_API_KEY}`.replace(/\s/g, '')
  )
    .then((res) => res.json())
    .then(({ articles }) =>
      articles.map((article) => ({
        title: article.title,
        url: article.url,
        description: article.description,
        img: article.urlToImage
      }))
    );
};
