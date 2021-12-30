import { Component } from "react"

import Landing from "../component/Landing"
import ListFund from "../component/ListFund"

class Main extends Component{
  constructor(props){
    super(props);
    this.props = props;
    this.movePage = this.movePage.bind(this)
    this.fetchFundlistServices = this.fetchFundlistServices.bind(this);
  }
  movePage(page){
    if(this.props.isLogin){
      this.props.history.push(page)
    }else{
      this.props.modalHandle('loginModal');
    }
  }
  async fetchFundlistServices(){
    try {
      const response = await this.props.getAllfund()
      return response.data.data.funds
    } catch (error) {
      console.log(error);
    }
  }
  render(){
    return (
      <>
        <Landing />
        <ListFund fetchFundlistServices = {this.fetchFundlistServices} movePage= {this.movePage}/>
      </>
    )
  }
}

export default Main