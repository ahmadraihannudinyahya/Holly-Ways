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
  return(
    <>
      <FundDetail handleTogleDonateModal={handleTogleDonateModal}/>
      {state.donateModalStatus ? <DonateModal handleTogleDonateModal={handleTogleDonateModal}/> : <></>}
      {state.aproveModalStatus ? <AproveModal/> : <></>}
    </>
  )
}

export default Detail;