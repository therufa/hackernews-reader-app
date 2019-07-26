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
        .then(result => {
          const newsIDs = result.data.slice(0, 15);
          const news = [];

          newsIDs.forEach(element => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
            .then(result => {
                console.log(result.data);
                news.push(result.data);
                this.setState({
                  news: news
                })
            });
          });

        });
    }

    render() {
      return <WrappedComponent news={this.state.news} {...this.props} />;
    }
  };
}
