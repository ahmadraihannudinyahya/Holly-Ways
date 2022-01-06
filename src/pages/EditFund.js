import { Component } from "react";

import FormRaiseFund from "../component/FormRaiseFund";

class EditFund extends Component{
  constructor(props){
    super();
    this.props = props;
    this.state = {
      fund : null
    }
    this.handlePostFund = this.handlePostFund.bind(this);
    this.fetchFundById = this.fetchFundById.bind(this);
  }
  async componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/');
    }
    await this.fetchFundById()
  }
  async fetchFundById(){
    try {
      const {id} = (this.props.match.params);
      const response = await this.props.getFundById(id);
      this.setState({fund :response.data.data.fund });
    } catch (error) {
      console.log(error);
    }
  }
  async handlePostFund(editFund, setAlert){
    try {
      await this.props.patchFund(editFund, this.state.fund.id);
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
        <FormRaiseFund postFund = {this.handlePostFund} fund={this.state.fund}/>
      </>
    )
  }
}
export default EditFund