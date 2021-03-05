import React from 'react';
import PropTypes from 'prop-types';


const Article = ({ title, url, image }) => (
  <a href={url}>
    <figure>
      <img src={image} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  </a>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Article;
