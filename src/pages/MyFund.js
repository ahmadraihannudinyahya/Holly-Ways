import { Component } from "react";
import MyListFund from "../component/MyListFund";

class MyFund extends Component{
  constructor(props){
    super();
    this.props = props;
    this.movePage = this.movePage.bind(this);
    this.fetchMyFundlistServices = this.fetchMyFundlistServices.bind(this);
  }
  movePage(page){
    this.props.history.push(page);
  }
  fetchMyFundlistServices(){
    return [
      {
        id:'gsdjjasdb',
        title : 'The Strength of a People. Power of Community',
        goal_donations : '25.000.0000',
        descriton : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        progres : '30',
        thumbnail : '/image/Rectangle7.png',
      },
      {
        id:'sdgsg',
        title : 'The Strength of a People. Power of Community',
        goal_donations : '25.000.0000',
        descriton : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        progres : '30',
        thumbnail : '/image/Rectangle7.png',
      }
    ]
  }
  render(){
    return(
      <>
        <MyListFund fetchMyFundlistServices={this.fetchMyFundlistServices} movePage={this.movePage}/>
      </>
    )
  }
}

export default MyFund;