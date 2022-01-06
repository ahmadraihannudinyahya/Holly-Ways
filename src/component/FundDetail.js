import { Component } from 'react';
import Progress from './common/Progress';
import './FundDetail.css'

class FundDetail extends Component{
  constructor(props){
    super(props);
    this.movePage = props.movePage;
    this.fund = props.fund;
    this.modalHandle = props.modalHandle;
    this.handleTogleDonateModal = this.handleTogleDonateModal.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }
  handleTogleDonateModal(e){
    e.preventDefault();
    this.modalHandle('donateModal');
  }
  handleClickEdit(e){
    e.preventDefault()
    this.movePage(`/editfund/${this.fund.id}`);
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
            <img src = {this.fund.thumbnail} alt={this.fund.title} />
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
              <p><b>{this.fund.donationCount}</b> Donation</p>
              <p><b>150</b> More Day</p>
            </div>
            <p>{this.fund.description}</p>
            <button onClick={this.handleTogleDonateModal}>Donate</button>
            {this.fund.isOwner ? <div>
              <button onClick = {this.handleClickEdit}>Edit</button>
              <button >Close Fund</button>
            </div>: <></>}
          </div>
        </div>
      </div>
    )
  }
}

export default FundDetail;