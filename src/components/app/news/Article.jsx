import React from 'react';
import PropTypes from 'prop-types';
import style from './article.css';

const Article = ({ title, url, description, img }) => (
  <>
    <figure className={style.articleContainer}>
      <a href={url}>
        <h3 className={style.articleTitle}>{title}</h3>{' '}
      </a>
      <img className={style.articleImg} src={img} alt={title} />
      <p className={style.articleDesc}>{description}</p>
    </figure>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default Article;
