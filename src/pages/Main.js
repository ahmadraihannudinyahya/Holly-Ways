import { Component } from "react"
import Navbar from "../component/common/Navbar";
import LoginModal from "../component/common/LoginModal";
import RegisterModal from "../component/common/RegisterModal";

import Landing from "../component/Landing"
import ListFund from "../component/ListFund"

class Main extends Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      modalLoginStatus : false,
      modalRegisterStatus : false,
    }

    this.togleModalLogin = this.togleModalLogin.bind(this);
    this.togleModalRegister = this.togleModalRegister.bind(this);
    this.movePage = this.movePage.bind(this)
  }
  togleModalLogin(){
    this.setState(prevState => ({modalLoginStatus : !prevState.modalLoginStatus}));
    this.setState({modalRegisterStatus :false});
  }
  togleModalRegister(){
    this.setState(prevState => ({modalRegisterStatus : !prevState.modalRegisterStatus}));
    this.setState({modalLoginStatus:false});
  }
  movePage(page){
    if(this.props.isLogin){
      this.props.history.push(page)
    }else{
      this.togleModalLogin()
    }
  }
  fetchFundlistServices(){
    return [
      {
        id:'gsdjjasdb',
        title : 'The Strength of a People. Power of Community',
        goal_donations : '25.000.0000',
        descriton : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        progres : '30',
        thumbnail : '/image/Rectangle7.png',
      },{
        id:'djfljkldf',
        title : 'Empowering Communities Ending Poverty',
        goal_donations : '50.000.0000',
        descriton : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        progres : '50',
        thumbnail : '/image/Rectangle7-1.png',
      },{
        id:'dffgdf',
        title : 'Please our brothers in flores',
        goal_donations : '100.000.0000',
        descriton : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        progres : '80',
        thumbnail : '/image/Rectangle7-2.png',
      },
    ]
  }
  render(){
    return (
      <>
        <Navbar isLogin = {this.props.isLogin} handleTogleModalLogin ={this.togleModalLogin} handleTogleModalRegister={this.togleModalRegister}/>
        <Landing />
        <ListFund fetchFundlistServices = {this.fetchFundlistServices} movePage= {this.movePage}/>
        {this.state.modalLoginStatus?<LoginModal handleTogleModal={this.togleModalLogin} handleSwitchModal={this.togleModalRegister}/>:<></>}
        {this.state.modalRegisterStatus?<RegisterModal handleTogleModal={this.togleModalRegister} handleSwitchModal={this.togleModalLogin}/>:<></>}
      </>
    )
  }
}

export default Main