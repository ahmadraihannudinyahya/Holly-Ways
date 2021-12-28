import './DonateModal.css'

function DonateModal(props){
  const {modalHandle} = props;

  const handleOffModal = e =>{
    e.preventDefault();
    if(e.target.classList.contains('donatemodalbackdrop')){
      modalHandle();
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