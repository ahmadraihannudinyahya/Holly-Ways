import { Component } from "react"

import Landing from "../component/Landing"
import ListFund from "../component/ListFund"

class Main extends Component{
  constructor(props){
    super(props);
    this.props = props;
    this.handleToDetailPage = this.handleToDetailPage.bind(this);
    this.handleClickDonate = this.handleClickDonate.bind(this);
  }

  handleToDetailPage(e){
    const link =`/fund/${e.target.id}`;
    if(this.state.isLogin){
      this.props.history.push(link);
    }else{
      this.setState({modalLoginStatus : true})
    }
  }
  
  handleClickDonate(){
    if(this.state.isLogin){
      this.props.location.hash = '#listfund'
    }else{
    }
  }

  fetchFundlistServices(){
    return [
      {
        id:'gsdjjasdb',
        title : 'The Strength of a People. Power of Community',
        goal_donations : '25.000.0000',
        descriton : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        progres : '30',
        thumbnail : '/image/Rectangle7.png',
      },{
        id:'djfljkldf',
        title : 'Empowering Communities Ending Poverty',
        goal_donations : '50.000.0000',
        descriton : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        progres : '50',
        thumbnail : '/image/Rectangle7-1.png',
      },{
        id:'dffgdf',
        title : 'Please our brothers in flores',
        goal_donations : '100.000.0000',
        descriton : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        progres : '80',
        thumbnail : '/image/Rectangle7-2.png',
      },
    ]
  }
  render(){
    return (
      <>
        <Landing handleClickDonate = {this.handleClickDonate}/>
        <ListFund fetchFundlistServices = {this.fetchFundlistServices} handleToDetailPage= {this.handleToDetailPage}/>
      </>
    )
  }
}

export default Main