import { Component } from "react";
import FundDetail from "../component/FundDetail";
import DonorFunds from "../component/DonorFunds";
import DonateModal from "../component/common/DonateModal"
import AproveModal from "../component/common/AproveModal"

class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {
      fund : null,
      donations : null,
      fundId : null,
      donationId : null,
      donateModal : false,
      approveModal : false,
      isOwner : false,
    }
    this.props = props;
    this.getFundByFundId = props.ApiServices.getFundByFundId
    this.postDonation = props.ApiServices.postDonation;
    this.getDonationByFundId = props.ApiServices.getDonationByFundId;
    this.patchDonationById = props.ApiServices.patchDonationById;
    this.fetchFundById = this.fetchFundById.bind(this);
    this.setModal = this.setModal.bind(this);
    this.handlePostDonation = this.handlePostDonation.bind(this);
    this.getDonationAproveModal = this.getDonationAproveModal.bind(this);
    this.handleAprove = this.handleAprove.bind(this);
    this.movePage = this.movePage.bind(this);
  }
  setModal(type, donationId){
    this.setState({
      donateModal : false,
      approveModal : false,
      donationId : null,
    });
    if(type === 'donateModal'){
      this.setState({donateModal : true});
    };
    if(type === 'aproveModal'){
      this.setState({approveModal : true});
      this.setState({donationId : donationId});
    }
  }
  movePage(page){
    this.props.history.push(page);
  }
  async componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/');
    };
    this.setState({
      isOwner : this.props.location.state.isOwner
    })
    const {id} = (this.props.match.params);
    this.setState({fundId : id});
    this.fetchFundById(id)
    this.fetchDonationByFundId(id);
  }
  async handlePostDonation(formData, setAlert){
    try {
      await this.postDonation(this.state.fundId, formData);
      await this.fetchFundById(this.state.fundId);
      this.setModal();
      this.props.history.push('/profile');
    } catch (error) {
      if(error.response){
        setAlert(error.response.data.message);
      }
      console.log(error);
    }
  }
  async fetchFundById(id){
    try {
      const response = await this.getFundByFundId(id);
      this.setState({fund :response.data.data.fund })
      this.render();
    } catch (error) {
      console.log(error);
    }
  }
  async fetchDonationByFundId(fundId){
    try {
      const response = await this.getDonationByFundId(fundId);
      this.setState({donations : response.data.data.donations});
    } catch (error) {
      console.log(error);
    }
  }
  getDonationAproveModal(){
    if(this.state.donationId){
      return this.state.donations.filter(donation => donation.id === this.state.donationId);
    }
  }
  async handleAprove(){
    try {
      await this.patchDonationById({fundId : this.state.fundId, donationId : this.state.donationId});
      this.setModal();
      this.setState({
        donations : null,
        fund : null,
      })
      this.fetchFundById(this.state.fundId)
      this.fetchDonationByFundId(this.state.fundId);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
        {this.state.fund? <FundDetail fund = {this.state.fund} isOwner = {this.state.isOwner} modalHandle = {this.setModal} movePage ={this.movePage}/> : <></> }
        {this.state.donations ? <DonorFunds donations ={this.state.donations} modalHandle ={this.setModal}/> : <></>}
        {this.state.donateModal ? <DonateModal modalHandle = {this.setModal} postDonation = {this.handlePostDonation}/> : <></>}
        {this.state.approveModal ? <AproveModal modalHandle = {this.setModal} getDonationContent = {this.getDonationAproveModal} handleAprove = {this.handleAprove}/> : <></>}
      </>
    );
  }
}

export default Detail;