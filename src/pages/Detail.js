import { Component } from "react";
import FundDetail from "../component/FundDetail";

class Detail extends Component{
  constructor(props){
    super(props);
    this.props = props;
  }
  componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <>
        <FundDetail {...this.props}/>
      </>
    );
  }
}

export default Detail;