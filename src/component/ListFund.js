import { Component } from 'react';

import CardFund from './common/CardFund';
import './ListFund.css'

class ListFund extends Component{
  constructor(props){
    super(props);
    this.state = {fundList : []}
    this.fetchFundlistServices = props.fetchFundlistServices;
    this.movePage = props.movePage;
  }
  async componentDidMount(){
    const fundList = await this.fetchFundlistServices();
    this.setState({fundList});
  }
  render() {
    return (
      <div className="listfund" id='listfund'>
      <h2>Donate Now</h2>
        <div className="listcontainer">
          {this.state.fundList.map( fund => <CardFund key={fund.id} fund={fund} movePage={this.movePage}/> )}
        </div>
      </div>
    );
  }
}

export default ListFund;