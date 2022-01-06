import { Component } from "react";
import DonorColomn from "./common/DonorColomn";
import './DonorFunds.css'

class DonorFunds extends Component{
  constructor(props){
    super();
    const [approvedDonations, disapproveDonations] = this.sortDonations(props.donations);
    this.state = {
      approvedDonations,
      disapproveDonations
    }
    this.handleModal = props.modalHandle;
  }
  sortDonations(donations){
    const approvedDonations = [];
    const disapproveDonations = [];
    donations.forEach(donation=>{
      if(donation.status === 'pending'){
        disapproveDonations.push(donation)
      }else{
        approvedDonations.push(donation);
      }
    });
    return [approvedDonations, disapproveDonations];
  }
  render(){
    const approvedDonationsEll = () =>{
      if(this.state.approvedDonations.length === 0){
        return (<></>);
      }
      return (
        <div className="donorfunds">
          <h2>List Donation ({this.state.approvedDonations.length})</h2>
          <div>
            {this.state.approvedDonations.map(donation => <DonorColomn {...donation} createdAt = {donation.postAt} key={donation.id}/>)}
            <p>Load Mode</p>
          </div>
        </div>
      )
    }
    const disapproveDonationsEll = () =>{
      if(this.state.disapproveDonations.length === 0){
        return (<></>);
      }
      return (
        <div className="donorfunds">
        <h2>Donation has not been approved ({this.state.disapproveDonations.length})</h2>
          <div>
            {this.state.disapproveDonations.map(donation => <DonorColomn key={donation.id} {...donation} isAproved={false} handleModal={this.handleModal}/>)}
            <p>Load Mode</p>
          </div>
        </div>
      )
    }
    return(
      <div className = "donationlist">
        {approvedDonationsEll()}
        {disapproveDonationsEll()}
      </div>
    )
  }
}
export default DonorFunds;