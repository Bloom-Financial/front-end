export const findArticles = (search) => {
  return fetch(`https://mysterious-basin-06930.herokuapp.com/news?q=${search}`)
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

// export const findArticles = (search) => {
//   return fetch('http://localhost:7891/news'.replace(/\s/g, ''))
//     .then((res) => res.json())
//     .then(({ articles }) =>
//       articles.map((article) => ({
//         title: article.title,
//         url: article.url,
//         description: article.description,
//         img: article.urlToImage,
//       }))
//     );
// };
