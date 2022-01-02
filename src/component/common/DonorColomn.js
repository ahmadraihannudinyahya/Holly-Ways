import './DonorColomn.css'

function DonorColomn(props){
  const { 
    isAproved = true ,
    isOwner = false,
    status = 'pending',
    handleModal,
    fullname,
    donateAmount,
    id,
    createdAt
  } = props
  const handleAproveModal = () =>{
    handleModal('aproveModal', id);
  }
  const statusEll = ()=>{
    if(status !== 'pending'){
      return <p>{status}</p>
    }
    return <p style={{backgroundColor:'red', color : 'black'}}>{status}</p>
  }
  return (
    <div className="donorcolomn">
      <div>
        <h3>{fullname}</h3>
        <p>{createdAt}</p>
        <div>
          <div>
            <p>Total : Rp.{donateAmount}</p>
          </div>
          {isOwner?<div>
            <div>
              {statusEll()}
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