import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Home from './screens/Home';
import Form from './screens/Form';
import './style.css';
import 'musubii';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p:300,400,700,900|Roboto&amp;subset=japanese" rel="stylesheet" />
          <title>Netlify Example Page</title>
        </Helmet>
        <Router>
          <div className='section'>
            <div className='inner'>
              <Route exact path='/' component={Home} />
              <Route path='/form' component={Form} />
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
