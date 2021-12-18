import MyListFund from "../component/MyListFund";

function MyFund (){

  const fetchMyFundlistServices=()=>{
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
  return(
    <div>
      <MyListFund fetchMyFundlistServices={fetchMyFundlistServices}/>
    </div>
  )
}

export default MyFund;