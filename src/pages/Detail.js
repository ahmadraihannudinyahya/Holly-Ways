import { Component } from "react";
import AproveModal from "../component/common/AproveModal";
import DonateModal from "../component/common/DonateModal";
import Navbar from "../component/common/Navbar";
import FundDetail from "../component/FundDetail";

class Detail extends Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      donateModalStatus : false,
      aproveModalStatus : false,
    }
    this.handleTogleDonateModal = this.handleTogleDonateModal.bind(this);
    this.handleAproveModal = this.handleAproveModal.bind(this);
  }
  componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/');
    }
  }
  handleTogleDonateModal(){
    this.setState(prevState => ({donateModalStatus : !prevState.donateModalStatus}));
  }
  handleAproveModal(){
    this.setState(prevState => ({aproveModalStatus : !prevState.aproveModalStatus}));
  }
  render() {
    return (
      <>
        <Navbar isLogin={this.props.isLogin}/>
        <FundDetail handleTogleDonateModal={this.handleTogleDonateModal} handleAproveModal={this.handleAproveModal}/>
        {this.state.donateModalStatus ? <DonateModal handleTogleDonateModal={this.handleTogleDonateModal}/> : <></>}
        {this.state.aproveModalStatus ? <AproveModal handleAproveModal={this.handleAproveModal}/> : <></>}
      </>
    );
  }
}

export default Detail;