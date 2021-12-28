import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Component } from "react";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import MyFund from "./pages/MyFund";
import RaiseFund from "./pages/RaiseFund";
import Navbar from "./component/common/Navbar";
import LoginModal from "./component/common/LoginModal";
import RegisterModal from "./component/common/RegisterModal";
import AproveModal from "./component/common/AproveModal";
import DonateModal from "./component/common/DonateModal";

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLogin : false,
      modal : {
        loginModal : false,
        registerModal : false,
        aproveModal : false,
        donateModal : false
      }
    }
    this.modalHandle = this.modalHandle.bind(this);
  }
  modalHandle(type){
    this.setState({modal : {
      loginModal : false,
      registerModal : false,
      aproveModal : false,
      donateModal : false,
    }})
    if(type === 'loginModal'){
      this.setState(prevState => ({modal : { loginModal : !prevState.modal.loginModal}}));
    }
    if(type === 'registerModal'){
      this.setState(prevState => ({modal : { registerModal : !prevState.modal.registerModal}}));
    }
    if(type === 'aproveModal'){
      this.setState(prevState => ({modal : { aproveModal : !prevState.modal.aproveModal}}));
    }
    if(type === 'donateModal'){
      this.setState(prevState => ({modal : { donateModal : !prevState.modal.donateModal}}));
    }
  }
  render() {
    return (
      <Router>
        <Navbar isLogin = {this.state.isLogin} modalHandle = {this.modalHandle}/>
        <Switch>
          <Route path="/profile" render={props => (<Profile {...props} isLogin={this.state.isLogin} modalHandle = {this.modalHandle}/>)} />
          <Route path="/raisefund" render={props => (<RaiseFund {...props} isLogin={this.state.isLogin}/>)} />
          <Route path="/fund/:id" render={(props)=>(<Detail {...props} isLogin ={this.state.isLogin} modalHandle = {this.modalHandle}/>)}/>
          <Route path="/fund" render={props =>(<MyFund {...props} isLogin={this.props.isLogin}/>)} />
          <Route path="/" render={(props)=>(<Main {...props} isLogin={this.state.isLogin} modalHandle = {this.modalHandle}/>)}/>
        </Switch>
        {this.state.modal.loginModal?<LoginModal modalHandle = {this.modalHandle}/>:<></>}
        {this.state.modal.registerModal?<RegisterModal modalHandle = {this.modalHandle}/>:<></>}
        {this.state.modal.donateModal ? <DonateModal modalHandle = {this.modalHandle}/> : <></>}
        {this.state.modal.aproveModal ? <AproveModal modalHandle = {this.modalHandle}/> : <></>}
      </Router>
    );
  }
}

export default App;
