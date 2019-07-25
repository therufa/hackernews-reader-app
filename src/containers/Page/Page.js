import React, { Component } from 'react'

export default class Page extends Component {
    render() {
        return (
            <div>
                <h1>HackerNews - {this.props.pageTitle} page</h1>
                <div>{this.props.content}</div>
            </div>
        )
    }
}