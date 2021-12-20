import './AproveModal.css'

function AproveModal(props){
  const {handleAproveModal} = props;
  
  const handleOffModal =(e)=>{
    if(e.target.classList.contains('aprovemodalbackdrop')){
      handleAproveModal();
    }
  }
  return(
    <div onClick={handleOffModal} className="aprovemodalbackdrop">
      <div className="modal">
        <h3>Zain</h3>
        <p>45.000.000</p>
        <img src="/image/Rectangle61.png" alt="Payment" />
        <button>Approve</button>
      </div>
    </div>
  )
}

export default AproveModal;