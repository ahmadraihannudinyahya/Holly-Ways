import { Component } from "react";
import Navbar from "../component/common/Navbar";
import FormRaiseFund from "../component/FormRaiseFund";

class RaiseFund extends Component{
  constructor(props){
    super();
    this.props = props;
  }
  componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/')
    }
  }
  render(){
    return(
      <>
        <Navbar isLogin = {this.props.isLogin}/>
        <FormRaiseFund/>
      </>
    )
  }
}

export default RaiseFund;