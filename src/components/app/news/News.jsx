import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Search from './Search';
import { findArticles } from '../../../services/newsApi';
import style from './search.css';

export default class News extends Component {
  state = {
    search: 'stocks',
    articles: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    this.setState({ loading: true });
    findArticles(this.state.search).then((articles) =>
      this.setState({ articles, loading: false })
    );
  };

  handleSearch = ({ target }) => {
    this.setState({ search: target.value }, () => {
      console.log(this.state.search);
      this.fetchArticles(this.state.search.replace(/\s/g, ''));
    });
  };

  render() {
    const { search, articles, loading } = this.state;

    return (
      <>
        <Search
          className={style.search}
          search={search}
          onChange={this.handleSearch}
        />
        {loading && <h1>Loading</h1>}
        <ArticleList articles={articles} />
      </>
    );
  }
}
