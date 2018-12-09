import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import HowAreYouFeeling from '../HowAreYouFeeling/HowAreYouFeeling'
import UnderstandingContent from '../UnderstandingConent/UnderstandingContent'
import FeelingSupported from '../FeelingSupported/FeelingSupported'
import Comments from '../Comments/Comments'
import ThankYou from '../ThankYou/ThankYou'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route path="/" exact component={HowAreYouFeeling} />
        <Route path='/understandingcontent' component={UnderstandingContent} />
        <Route path='/feelingsupported' component={FeelingSupported} />
        <Route path='/comments' component={Comments} />
        <Route path='/thankyou' component={ThankYou}/>
        <br/>
      </div>
      </Router>
    );
  }
}

export default App;
