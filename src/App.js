import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Home from './screens/Home';
import Form from './screens/Form';
import Thanks from './screens/Thanks';
import './style.css';
import 'musubii';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <html lang='ja' />
          <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p:300,400,700,900|Roboto&amp;subset=japanese" rel="stylesheet" />
          <title>Netlify Example Page</title>
        </Helmet>
        <Router>
          <div className='section'>
            <div className='inner'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/form' component={Form} />
                <Route exact path='/form/thanks' component={Thanks} />
              </Switch>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
