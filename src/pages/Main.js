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
  render(){
    return (
      <>
        <Navbar handleShowModal = {this.handleShowModal}/>
        <Landing handleShowModal = {this.handleShowModal}/>
        <ListFund />
        {this.state.modalLoginStatus ? <LoginModal handleOffModal= {this.handleOffModal} />: ''}
        {this.state.modalRegisterStatus ? <RegisterModal handleOffModal= {this.handleOffModal} />: ''}
      </>
    )
  }
}

export default Main