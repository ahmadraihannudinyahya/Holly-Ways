import { useHistory } from "react-router";
import MyListFund from "../component/MyListFund";

function MyFund (){
  const history = useHistory();
  const moveToRaiseFundPage = ()=>{
    history.push('/raisefund');
  }
  const fetchMyFundlistServices = () => {
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
      <MyListFund fetchMyFundlistServices={fetchMyFundlistServices} moveToRaiseFundPage={moveToRaiseFundPage}/>
    </div>
  )
}

export default MyFund;