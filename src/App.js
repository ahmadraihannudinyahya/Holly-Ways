import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Component } from "react";
import ApiServices from './api/ApiServices';
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
      isLogin : true,
      modal : {
        loginModal : false,
        registerModal : false,
        aproveModal : false,
        donateModal : false
      }
    }
    this.modalHandle = this.modalHandle.bind(this);
    this.setIsLogin = this.setIsLogin.bind(this);
  }
  componentDidMount(){
    const token = localStorage.getItem('token');
    if( !token ){
      this.setIsLogin();
    }
  }
  setIsLogin(isLogin){
    if(isLogin){
      this.setState({isLogin : true});
    }else {
      this.setState({isLogin : false});
    }
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
        <Navbar isLogin = {this.state.isLogin} modalHandle = {this.modalHandle} setIsLogin = {this.setIsLogin}/>
        <Switch>
          <Route path="/profile" render={props => (<Profile {...props} isLogin={this.state.isLogin} modalHandle = {this.modalHandle}/>)} />
          <Route path="/raisefund" render={props => (<RaiseFund {...props} isLogin={this.state.isLogin} postFund={ApiServices.postFund}/>)} />
          <Route path="/fund/:id" render={(props)=>(<Detail {...props} isLogin ={this.state.isLogin} modalHandle = {this.modalHandle}/>)}/>
          <Route path="/fund" render={props =>(<MyFund {...props} isLogin={this.state.isLogin}/>)} />
          <Route path="/" render={(props)=>(<Main {...props} isLogin={this.state.isLogin} modalHandle = {this.modalHandle}/>)}/>
        </Switch>
        {this.state.modal.loginModal?<LoginModal modalHandle = {this.modalHandle} postLogin = {ApiServices.postLoginUser} setIsLogin = {this.setIsLogin}/>:<></>}
        {this.state.modal.registerModal?<RegisterModal modalHandle = {this.modalHandle} postRegister = {ApiServices.postRegisterUser} setIsLogin = {this.setIsLogin}/>:<></>}
        {this.state.modal.donateModal ? <DonateModal modalHandle = {this.modalHandle}/> : <></>}
        {this.state.modal.aproveModal ? <AproveModal modalHandle = {this.modalHandle}/> : <></>}
      </Router>
    );
  }
}

export default App;
