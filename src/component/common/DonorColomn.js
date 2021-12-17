import './DonorColomn.css'

function DonorColomn(props){
  const {isAproved}= props
  return (
    <div className="donorcolomn">
      <div>
        <h3>Zain</h3>
        <p><b>Saturday,</b> 12 April 2021</p>
        <p>Total : Rp45.000</p>
      </div>
      {isAproved?<></>:<div>
        <button>View</button>
      </div>}
      
    </div>
  )
}

export default DonorColomn