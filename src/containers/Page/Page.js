import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Page.css';

export default class Page extends Component {
  render() {
    return (
      <>
        <nav className="PageNavBar">
            <h1>HackerNews - {this.props.pageTitle} page</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
        <div>
          <div>{this.props.content}</div>
        </div>
      </>
    );
  }
}
