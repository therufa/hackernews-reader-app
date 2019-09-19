import React from "react";
import axios from "axios";

export default function withNews(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        news: []
      };
    }

    componentDidMount() {
      axios
        .get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(result => result.data.slice(0, 15))
        .then(newsIDs => 
          Promise.all(newsIDs.map(element => 
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
              .then(response => response.data)
          )))
        .then(news => this.setState({ news }))
    }

    render() {
      return <WrappedComponent news={this.state.news} {...this.props} />;
    }
  };
}
