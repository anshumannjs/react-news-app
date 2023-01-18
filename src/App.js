import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import NewsBody from './NewsBody';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { query: null };
    this.querySet = this.querySet.bind(this);
  }
  querySet(str) {
    this.setState({ query: str });

  }

  render() {
    return (
      <Router>
        <div id='main' className='flex flex-col'>
          <Navbar search={this.querySet}></Navbar>
          <Switch>
            <Route key={"home"} path='/' element={<NewsBody category='general' query={null} />}></Route>
            <Route key={"science"} path='/science' element={<NewsBody category="science" query={null} />}></Route>
            <Route key={"technology"} path='/technology' element={<NewsBody category='technology' query={null} />}></Route>
            <Route key={"entertainment"} path='/entertainment' element={<NewsBody category='entertainment' query={null} />}></Route>
            <Route key={"buisness"} path='/business' element={<NewsBody category='business' query={null} />}></Route>
            <Route key={"sports"} path='/sports' element={<NewsBody category='sports' query={null} />}></Route>
            <Route key={"health"} path='/health' element={<NewsBody category='health' query={null} />}></Route>
            <Route key={this.state.query} path={`/q=${this.state.query}`} element={<NewsBody query={this.state.query} category={null} />}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
