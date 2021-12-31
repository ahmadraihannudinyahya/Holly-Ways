import { useEffect, useState } from 'react';
import './AproveModal.css'

function AproveModal(props){
  const {modalHandle, getDonationContent, handleAprove} = props;
  const [state, setState] = useState({donation : null})
  useEffect(()=>{
    const donation = getDonationContent();
    setState({donation});
  }, [])
  const handleOffModal =(e)=>{
    if(e.target.classList.contains('aprovemodalbackdrop')){
      modalHandle();
    }
  }
  const handleClickAprove = (e) =>{
    e.preventDefault();
    handleAprove()
  }
  if(state.donation){
    return(
      <div onClick={handleOffModal} className="aprovemodalbackdrop">
        <div className="modal">
          <h3>{state.donation[0].fullname}</h3>
          <p>Rp.{state.donation[0].donateAmount}</p>
          <img src={`http://${state.donation[0].proofAttachment}`} alt="Payment" />
          <button onClick = {handleClickAprove}>Approve</button>
        </div>
      </div>
    )
  }
  return (<></>);
}

export default AproveModal;