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
      return this.state.approvedDonations.map(donation => <DonorColomn {...donation} key={donation.id}/>)
    }
    const disapproveDonationsEll = () =>{
      if(this.state.disapproveDonations.length === 0){
        return (<></>);
      }
      return this.state.disapproveDonations.map(donation => <DonorColomn key={donation.id} {...donation} isAproved={false} handleModal={this.handleModal}/>)
    }
    return(
      <div className = "donationlist">
        <div className="donorfunds">
          <h2>List Donation (200)</h2>
          <div>
            {approvedDonationsEll()}
            <p>Load Mode</p>
          </div>
        </div>
        <div className="donorfunds">
        <h2>Donation has not been approved (10)</h2>
          <div>
            {disapproveDonationsEll()}
            <p>Load Mode</p>
          </div>
        </div>
      </div>
    )
  }
}
export default DonorFunds;