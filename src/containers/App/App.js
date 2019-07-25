import React from 'react';
import News from '../News/News'
import Page from '../Page/Page'
import './App.css';

function App() {
  return (
    <div className="App">
      <Page pageTitle="News" content={<News/>} />
    </div>
  );
}

export default App;
