import './DonorColomn.css'

function DonorColomn(props){
  const { 
    isAproved = true ,
    isOwner = false,
    handleModal,
    fullname,
    donateAmount,
    id
  } = props
  const handleAproveModal = () =>{
    handleModal('aproveModal', id);
  }
  return (
    <div className="donorcolomn">
      <div>
        <h3>{fullname}</h3>
        <p><b>Saturday,</b> 12 April 2021</p>
        <div>
          <div>
            <p>Total : Rp.{donateAmount}</p>
          </div>
          {isOwner?<div>
            <div>
              <p>Finished</p>
            </div>
          </div>:<></>}
          
        </div>
      </div>
      {isAproved?<></>:<div>
        <button onClick={handleAproveModal}>View</button>
      </div>}
      
    </div>
  )
}

export default DonorColomn