import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  if (articles.length < 1) return <h1>Make a search....</h1>;

  const articleElements = articles.map((article) => (
    <li key={article.url}>
      <Article {...article} />
    </li>
  ));

  return (
    // add className={insert styles}
    <ul data-testid="articles">{articleElements}</ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      description: PropTypes.string,
      img: PropTypes.string,
    })
  ).isRequired,
};

export default ArticleList;
