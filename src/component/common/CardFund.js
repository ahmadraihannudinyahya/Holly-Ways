import './CardFund.css'

function CardFund(){
  return(
    <div className="cardfund">
      <img src="/image/Rectangle7.png" alt="Bocah" />
      <h3>The Strength of a People. Power of Community</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div>
        <div>
          <p>Rp. 25.000.000</p>
        </div>
        <div>
          <button>Donate</button>
        </div>
      </div>
    </div>
  )
}

export default CardFund;