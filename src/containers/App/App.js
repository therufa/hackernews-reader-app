import React from 'react';
import News from '../News/News'
import NewsView from '../NewsView/NewsView'
import { Route } from "react-router-dom";
import './App.css';
import Page from "../Page/Page";

function App() {
  return (
    <div className="App">
      <div>
        <Route path="/" exact render={props => <Page pageTitle="News list" content={<News {...props} />}/>}/>
        <Route path="/:id" exact render={props => <Page pageTitle="News item" content={<NewsView {...props}/>}/>}/>
      </div>
    </div>
  );
}

export default App;
