import { Component } from "react";
import FormRaiseFund from "../component/FormRaiseFund";

class RaiseFund extends Component{
  constructor(props){
    super();
    this.props = props;
    this.handlePostFund = this.handlePostFund.bind(this);
  }
  componentDidMount(){
    console.log(this.props.isLogin);
    if(!this.props.isLogin){
      this.props.history.push('/');
    }
  }
  async handlePostFund(newFund, setAlert){
    try {
      await this.props.postFund(newFund);
      this.props.history.push('/fund')
    } catch (error) {
      if(error.response){
        setAlert(error.response.data.message);
      }
      console.log(error);
    }
  }
  render(){
    return(
      <>
        <FormRaiseFund postFund = {this.handlePostFund}/>
      </>
    )
  }
}

export default RaiseFund;