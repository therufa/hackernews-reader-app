import React, { Component } from "react";
import axios from "axios";

export default class NewsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: undefined
    };
    console.log(this.props.match.params.id);
  }

  componentDidMount() {
    this.fetchNews(this.props.match.params.id);
  }

  fetchNews = id => {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(result => {
        console.log(result.data);
        this.setState({
          news: result.data
        });
      });
  };

  render() {
    return (
      <>
        {this.state.news && (
          <div>
            <h4>{this.state.news.title}</h4>
            <p>
              <a href={this.state.news.url} target="_blank">[link]</a>
            </p>
          </div>
        )}
      </>
    );
  }
}
