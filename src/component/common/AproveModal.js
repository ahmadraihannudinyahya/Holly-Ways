import { useEffect, useState } from 'react';
import './AproveModal.css'

function AproveModal(props){
  const {modalHandle, getDonationContent, handleAprove} = props;
  const [state, setState] = useState({donation : null})
  const [isLoading, setIsLoading] = useState(false);
  const setDonations=()=>{
    setState({
      donation : getDonationContent(),
    });
  }
  useEffect(()=>{
    setDonations()
  },[]);
  const handleOffModal =(e)=>{
    if(e.target.classList.contains('aprovemodalbackdrop')){
      modalHandle();
    }
  }
  const handleClickAprove = (e) =>{
    setIsLoading(true);
    e.preventDefault();
    handleAprove()
  }
  if(state.donation){
    return(
      <div onClick={handleOffModal} className="aprovemodalbackdrop">
        <div className="modal">
          <h3>{state.donation[0].fullname}</h3>
          <p>Rp.{state.donation[0].donateAmount}</p>
          <img src={state.donation[0].proofAttachment} alt="Payment" />
          <button onClick = {handleClickAprove} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Approve'}
          </button>
        </div>
      </div>
    )
  }
  return (<></>);
}

export default AproveModal;