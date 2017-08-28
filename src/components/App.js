import React, { Component } from 'react';
import '../styles/global-style.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Calendar from './Calendar';
import About from './About';
import Media from './Media';
import PublicBlog from './PublicBlog';




class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/about" component={About} />
          <Route path="/media" component={Media} />
          <Route path="/blog" component={PublicBlog} />
        </Switch>
      </main>
    );
  }
}

export default App;