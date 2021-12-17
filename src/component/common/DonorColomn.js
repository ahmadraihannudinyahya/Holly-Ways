import './DonorColomn.css'

function DonorColomn(props){
  const { 
    isAproved = true ,
    isOwner = false,
  } = props
  return (
    <div className="donorcolomn">
      <div>
        <h3>Zain</h3>
        <p><b>Saturday,</b> 12 April 2021</p>
        <div>
          <div>
            <p>Total : Rp45.000</p>
          </div>
          {isOwner?<div>
            <div>
              <p>Finished</p>
            </div>
          </div>:<></>}
          
        </div>
      </div>
      {isAproved?<></>:<div>
        <button>View</button>
      </div>}
      
    </div>
  )
}

export default DonorColomn