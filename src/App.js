import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Component } from "react";
import ApiServices from './api/ApiServices';
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import MyFund from "./pages/MyFund";
import RaiseFund from "./pages/RaiseFund";
import EditFund from "./pages/EditFund";
import Navbar from "./component/common/Navbar";
import LoginModal from "./component/common/LoginModal";
import RegisterModal from "./component/common/RegisterModal";
import NotificationContainer from './component/NotificationContainer';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLogin : true,
      modal : {
        loginModal : false,
        registerModal : false
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
  modalHandle(type, value){
    this.setState({modal : {
      loginModal : false,
      registerModal : false,
    }})
    if(type === 'loginModal'){
      this.setState(prevState => ({modal : { loginModal : !prevState.modal.loginModal}}));
    }
    if(type === 'registerModal'){
      this.setState(prevState => ({modal : { registerModal : !prevState.modal.registerModal}}));
    }
  }
  render() {
    return (
      <Router>
        <Navbar isLogin = {this.state.isLogin} modalHandle = {this.modalHandle} setIsLogin = {this.setIsLogin}/>
        <Switch>
          <Route path="/profile" render={props => (<Profile {...props} isLogin={this.state.isLogin} modalHandle = {this.modalHandle} {...ApiServices}/>)} />
          <Route path="/raisefund" render={props => (<RaiseFund {...props} isLogin={this.state.isLogin} postFund={ApiServices.postFund}/>)} />
          <Route path="/editfund/:id" render={props => (<EditFund {...props} isLogin={this.state.isLogin} patchFund={ApiServices.patchFund} getFundById = {ApiServices.getFundByFundId}/>)} />
          <Route path="/fund/:id" render={(props)=>(<Detail {...props} isLogin ={this.state.isLogin} modalHandle = {this.modalHandle} ApiServices = {ApiServices}/>)}/>
          <Route path="/fund" render={props =>(<MyFund {...props} isLogin={this.state.isLogin} {...ApiServices}/>)} />
          <Route path="/" render={(props)=>(<Main {...props} isLogin={this.state.isLogin} modalHandle = {this.modalHandle} getAllfund = {ApiServices.getAllfund}/>)}/>
        </Switch>
        {this.state.modal.loginModal?<LoginModal modalHandle = {this.modalHandle} postLogin = {ApiServices.postLoginUser} setIsLogin = {this.setIsLogin}/>:<></>}
        {this.state.modal.registerModal?<RegisterModal modalHandle = {this.modalHandle} postRegister = {ApiServices.postRegisterUser} setIsLogin = {this.setIsLogin}/>:<></>}
        <NotificationContainer />
      </Router>
    );
  }
}

export default App;
