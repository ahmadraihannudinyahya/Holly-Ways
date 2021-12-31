import { Component } from 'react';
import Progress from './common/Progress';
import './FundDetail.css'

class FundDetail extends Component{
  constructor(props){
    super(props);
    this.fund = props.fund;
    this.modalHandle = props.modalHandle;
    this.handleTogleDonateModal = this.handleTogleDonateModal.bind(this);
  }
  handleTogleDonateModal(e){
    e.preventDefault();
    this.modalHandle('donateModal');
  }
  render(){
    if(!this.fund){
      return(
        <></>
      )
    }
    const progres = this.fund.donationObtained / this.fund.goal * 100
    return (
      <div className="funddetail">
        <div>
          <div>
            <img src = {`http://${this.fund.thumbnail}`} alt={this.fund.title} />
          </div>
          <div>
            <h2>{this.fund.title}</h2>
            <div>
              <p>Rp. {this.fund.donationObtained}</p>
              <p>gathered from</p>
              <p>Rp. {this.fund.goal}</p>
            </div>
            <Progress value={progres}/>
            <div>
              <p><b>200</b> Donation</p>
              <p><b>150</b> More Day</p>
            </div>
            <p>{this.fund.description}</p>
            <button onClick={this.handleTogleDonateModal}>Donate</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FundDetail;