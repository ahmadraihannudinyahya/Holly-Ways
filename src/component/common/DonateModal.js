import './DonateModal.css'

function DonateModal(props){
  const {handleTogleDonateModal} = props;
  const handleOffModal = e =>{
    if(e.target.classList.contains('donatemodalbackdrop')){
      handleTogleDonateModal(e);
    }
  }
  return (
   <div className="donatemodalbackdrop" tabIndex='-1' onClick={handleOffModal}>
     <div className="modal">
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
        <button>Donate</button>
     </div>
   </div>
 )
}
export default DonateModal;