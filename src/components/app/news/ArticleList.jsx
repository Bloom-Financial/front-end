import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import styles from './ArticleList.css';

const ArticleList = ({ articles }) => {
  if(articles.length < 1) return <h1>Make a search....</h1>;

  const articleElements = articles.map((article) => (
    <li key={article.url}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul className={styles.Container} data-testid="articles">
      {articleElements}
    </ul>
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
