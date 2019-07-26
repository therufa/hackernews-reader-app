import React, { Component } from "react";
import './Page.css';

export default class Page extends Component {
  render() {
    return (
      <>
        <nav className="PageNavBar">
            <h1>HackerNews - {this.props.pageTitle} page</h1>
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
        <div>
          <div>{this.props.content}</div>
        </div>
      </>
    );
  }
}
