import Main from "./pages/Main";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Component } from "react";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import MyFund from "./pages/MyFund";
import RaiseFund from "./pages/RaiseFund";

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLogin : true,
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/raisefund" component={RaiseFund} />
          <Route path="/fund/:id" component={Detail} />
          <Route path="/fund" component={MyFund} />
          <Route path="/" render={(props)=>(<Main {...props} isLogin={this.state.isLogin}/>)}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
