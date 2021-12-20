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
          <Route path="/profile" render={props => (<Profile {...props} isLogin={this.state.isLogin}/>)} />
          <Route path="/raisefund" render={props => (<RaiseFund {...props} isLogin={this.state.isLogin}/>)} />
          <Route path="/fund/:id" render={(props)=>(<Detail {...props} isLogin ={this.state.isLogin}/>)}/>
          <Route path="/fund" render={props =>(<MyFund {...props} isLogin={this.props.isLogin}/>)} />
          <Route path="/" render={(props)=>(<Main {...props} isLogin={this.state.isLogin}/>)}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
