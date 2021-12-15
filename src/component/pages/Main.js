import { Component } from "react"
import RegisterModal from "../common/RegisterModal"
import Navbar from "../common/Navbar"
import Landing from "../Landing"
import ListFund from "../ListFund"

class Main extends Component{
  render(){
    return (
      <>
        <Navbar />
        <Landing />
        <ListFund />
        <RegisterModal />
      </>
    )
  }
}

export default Main