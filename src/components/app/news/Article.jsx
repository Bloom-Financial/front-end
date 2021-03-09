import React from 'react';
import PropTypes from 'prop-types';
import style from './article.css';

const Article = ({ title, url, description, img }) => (
  <a href={url}>
    <figure className={style.articleContainer}>
      <h3 className={style.articleTitle}>{title}</h3>
      <img className={style.articleImg} src={img} alt={title} />
      <p className={style.articleDesc}>{description}</p>
    </figure>
  </a>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Article;
