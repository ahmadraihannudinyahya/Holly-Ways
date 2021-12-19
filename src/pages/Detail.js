import { useState } from "react";
import AproveModal from "../component/common/AproveModal";
import DonateModal from "../component/common/DonateModal";
import FundDetail from "../component/FundDetail";

function Detail(){
  const [state, setState] = useState({
    donateModalStatus : false,
    aproveModalStatus : false,
  });

  const handleTogleDonateModal = () => {
    setState(prevState => ({donateModalStatus : !prevState.donateModalStatus}));
  }
  const handleAproveModal = ()=>{
    setState(prevState => ({aproveModalStatus : !prevState.aproveModalStatus}));
  }
  return(
    <>
      <FundDetail handleTogleDonateModal={handleTogleDonateModal} handleAproveModal={handleAproveModal}/>
      {state.donateModalStatus ? <DonateModal handleTogleDonateModal={handleTogleDonateModal}/> : <></>}
      {state.aproveModalStatus ? <AproveModal handleAproveModal={handleAproveModal}/> : <></>}
    </>
  )
}

export default Detail;