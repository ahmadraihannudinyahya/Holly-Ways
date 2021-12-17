import './DonateModal.css'

function DonateModal(props){
  const {handleToogleDonateModal} = props;
  return (
   <div className="donatemodalbackdrop">
     <div className="donatemodal">
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