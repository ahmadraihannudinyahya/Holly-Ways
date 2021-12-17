import { useState } from "react";
import DonateModal from "../component/common/DonateModal";
import Navbar from "../component/common/Navbar";
import FundDetail from "../component/FundDetail";

function Detail(){
  const [state, setState] = useState({
    donateModalStatus : false
  });

  const handleTogleDonateModal = ()=>{
    setState(prevState => ({donateModalStatus : !prevState.donateModalStatus}));
  }
  return(
    <>
      <FundDetail handleTogleDonateModal={handleTogleDonateModal}/>
      {state.donateModalStatus ? <DonateModal handleTogleDonateModal={handleTogleDonateModal}/> : <></>}
      
    </>
  )
}

export default Detail;