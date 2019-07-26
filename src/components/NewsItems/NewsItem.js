import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <li><a href={"/"+this.props.item.id}>{this.props.item.title}</a></li>
        )
    }
}
