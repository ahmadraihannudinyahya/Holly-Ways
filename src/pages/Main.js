import { Component } from "react"
import { unmountComponentAtNode, render} from "react-dom"
import RegisterModal from "../component/common/RegisterModal"
import LoginModal from "../component/common/LoginModal"
import Navbar from "../component/common/Navbar"
import Landing from "../component/Landing"
import ListFund from "../component/ListFund"

class Main extends Component{
  
  handleLoginClick(e){
    e.preventDefault();
    render(<LoginModal />,)
  }
  render(){
    return (
      <>
        <Navbar handleLogin = {this.handleLoginClick}/>
        <Landing />
        <ListFund />
      </>
    )
  }
}

export default Main