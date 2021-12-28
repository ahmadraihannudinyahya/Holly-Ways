import { Component } from "react";
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
        <FormRaiseFund/>
      </>
    )
  }
}

export default RaiseFund;