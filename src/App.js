import Main from "./pages/Main";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Component } from "react";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Navbar from "./component/common/Navbar";
import LoginModal from "./component/common/LoginModal";
import RegisterModal from "./component/common/RegisterModal";
import MyFund from "./pages/MyFund";
import RaiseFund from "./pages/RaiseFund";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin : false,
      modalLoginStatus : false,
      modalRegisterStatus : false,
    }
    this.handleTogleModalLogin = this.handleTogleModalLogin.bind(this);
    this.handleTogleModalRegister = this.handleTogleModalRegister.bind(this);
  }
  handleTogleModalLogin(){
    this.setState(prevState => ({modalLoginStatus : !prevState.modalLoginStatus}));
    this.setState({modalRegisterStatus : false});
  }
  handleTogleModalRegister(){
    this.setState(prevState => ({modalRegisterStatus : !prevState.modalRegisterStatus}));
    this.setState({modalLoginStatus : false});
  }
  render() {
    return (
      <>
        <Router>
          <Navbar handleTogleModalLogin= {this.handleTogleModalLogin} handleTogleModalRegister={this.handleTogleModalRegister} isLogin={this.state.isLogin}/>
            <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/raisefund" component={RaiseFund} />
              <Route path="/fund/:id" component={Detail} />
              <Route path="/fund" component={MyFund} />
              <Route path="/" component={Main} />
            </Switch>
          {this.state.modalLoginStatus ? <LoginModal handleTogleModal= {this.handleTogleModalLogin} handleSwitchModal= {this.handleTogleModalRegister}/> : <></>}
          {this.state.modalRegisterStatus ? <RegisterModal handleTogleModal = {this.handleTogleModalRegister} handleSwitchModal= {this.handleTogleModalLogin}/> : <></>}
        </Router>
      </>
    );
  }
}

export default App;
