import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Privacy from './privacy';
import Tos from './tos';
import Community from './community';



import * as serviceWorker from './serviceWorker';
import { useLocation, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";


class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);


const routing = (
    <Router>
      <div>
      {/* <ScrollToTop/>  */}

        <Switch> 

        <Route exact path="/" component={App} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/tos" component={Tos} />
        <Route path="/community" component={Community} />


  

        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(
routing
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
