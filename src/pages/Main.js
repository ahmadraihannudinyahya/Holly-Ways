import { Component } from "react"
import { unmountComponentAtNode, render} from "react-dom"
import RegisterModal from "../component/common/RegisterModal"
import LoginModal from "../component/common/LoginModal"
import Navbar from "../component/common/Navbar"
import Landing from "../component/Landing"
import ListFund from "../component/ListFund"

class Main extends Component{
  constructor(){
    super();
    this.state = {
      modalLoginStatus : false,
      modalRegisterStatus : false,
    }
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleOffModal = this.handleOffModal.bind(this);
  }
  handleShowModal(e){
    if(e.target.id ==='login'){
      this.setState({modalLoginStatus : true})
    }else{
      this.setState({modalRegisterStatus : true})
    }
  }

  handleOffModal(e){
    if(e.target.id ==='modalLogin'){
      this.setState({modalLoginStatus : false})
    }
    else{
      this.setState({modalRegisterStatus : false})
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
        <Navbar handleShowModal = {this.handleShowModal}/>
        <Landing handleShowModal = {this.handleShowModal}/>
        <ListFund fetchFundlistServices = {this.fetchFundlistServices}/>
        {this.state.modalLoginStatus ? <LoginModal handleOffModal= {this.handleOffModal} />: ''}
        {this.state.modalRegisterStatus ? <RegisterModal handleOffModal= {this.handleOffModal} />: ''}
      </>
    )
  }
}

export default Main