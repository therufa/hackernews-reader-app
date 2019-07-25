import React, { Component } from 'react'
import withNews from '../../hoc/withNews';
import NewsItem from '../../components/NewsItems/NewsItem';

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
                <ul>
                    {newsItems}
                </ul>
            </>
        )
    }
}

export default withNews(News);