import { Component } from "react";
import MyListFund from "../component/MyListFund";

class MyFund extends Component{
  constructor(props){
    super();
    this.state = {
      listFund : null,
    }
    this.props = props;
    this.movePage = this.movePage.bind(this);
    this.fetchMyFundlistServices = this.fetchMyFundlistServices.bind(this);
  }

  async componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/');
    }
    await this.fetchMyFundlistServices()
  }
  movePage(page){
    this.props.history.push(page);
  }

  async fetchMyFundlistServices(){
    try {
      const response = await this.props.getUserLoginFund();
      this.setState({listFund : response.data.data.funds});
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    return(
      <>
      {this.state.listFund? <MyListFund listFund={this.state.listFund} movePage={this.movePage}/> : <></>}
      </>
    )
  }
}

export default MyFund;