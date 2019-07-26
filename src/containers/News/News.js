import React, { Component } from 'react'
import withNews from '../../hoc/withNews';
import NewsItem from '../../components/NewsItems/NewsItem';
import "./News.css";

class News extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        const newsItems = this.props.news.map((element) =>
            <NewsItem item={element}/>
        );
        return (
            <>
                <ul className="NewsList">
                    {newsItems}
                </ul>
            </>
        )
    }
}

export default withNews(News);
