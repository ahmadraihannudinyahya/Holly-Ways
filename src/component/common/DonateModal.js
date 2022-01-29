import { useState } from 'react';
import './DonateModal.css'

function DonateModal(props){
  const {modalHandle, postDonation} = props;
  const [state, setState] = useState({alert : null})
  const [isLoading, setIsLoading] = useState(false);
  const handleOffModal = e =>{
    if(e.target.classList.contains('donatemodalbackdrop')){
      modalHandle();
    }
  }
  const setAlert = (message) =>{
    setIsLoading(false);
    setState({alert : message});
  }
  const handleSubmit = async (e)=>{
    setIsLoading(true);
    e.preventDefault();
    const fileSelect = e.target.previousElementSibling;
    const paymentEll = fileSelect.previousElementSibling;
    const donateAmountEll = paymentEll.previousElementSibling;
    const formData = new FormData();
    formData.append('proofAttachment', fileSelect.files[0]);
    formData.set('donateAmount', donateAmountEll.value);
    await postDonation(formData, setAlert);
  }
  return (
   <div className="donatemodalbackdrop" tabIndex='-2' onClick={handleOffModal}>
     <div className="modal">
        <div>
          {state.alert ? <span>{state.alert}</span> : <></>}
        </div>
        <div>
          <input type="number" placeholder="Nominal Donation"/>
          <div>
            <div>
              <label htmlFor="payment" className="btn">Attach Payment</label>
            </div>
            <div>
              <p>*transfers can be made to holyways accounts</p>
            </div>
          </div>
          <input type="file" id="payment" style={{display:'none'}}/>
          <button onClick = {handleSubmit} disabled = {isLoading}>
            {isLoading?'Loading...':'Donate'}
          </button>
        </div>
     </div>
   </div>
 )
}
export default DonateModal;