import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NewsItem extends Component {
    render() {
        return (
            <li><Link to={"/"+this.props.item.id}>{this.props.item.title}</Link></li>
        )
    }
}
