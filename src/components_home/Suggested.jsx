import '../components_home/Suggested.css'
import blockchain from '../assets/blockchain.png'
import defi from '../assets/defi.png'
import mining from '../assets/mining.png'

const Suggested = () => {

    return (
    <div className='suggested'>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" 
      className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" 
      aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" 
      aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner ">

  <div className="carousel-item active">
    <div className="row align-items-center">
      <div className="col-md-5 custom-image-box">
        <img src={blockchain} alt="Blockchain Guide"/>
      </div>
      <div className="col-md-6 mt-4">
        <h5>What is Blockchain?</h5>
        <p>
          Blockchain is like a big digital book where all transactions are recorded. 
          Each block is connected to the previous one and cannot be deleted or changed. 
          It ensures maximum transparency and security.
        </p>
        <button type="button" className="btn btn-primary btn-custom">
         <a 
            href="https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-a-blockchain" 
            target="_blank" 
            rel="noreferrer" 
            style={{ textDecoration: "none", color: "white" }}>Learn More
          </a>
        </button>
      </div>
    </div>
  </div>

  <div className="carousel-item">
    <div className="row align-items-center">
      <div className="col-md-5 custom-image-box">
        <img src={defi} alt="DeFi Guide"/>
      </div>
      <div className="col-md-6 mt-4">
        <h5>What is DeFi?</h5>
        <p>
          DeFi (Decentralized Finance) is an open financial system where you can borrow, 
          invest, and trade without intermediaries like banks. 
          Everything works through smart contracts on the blockchain.
        </p>
        <button type="button" className="btn btn-primary btn-custom">
           <a 
            href="https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-defi" 
            target="_blank" 
            rel="noreferrer" 
            style={{ textDecoration: "none", color: "white" }}>Learn More
          </a>
        </button>
      </div>
    </div>
  </div>

  <div className="carousel-item">
    <div className="row align-items-center">
      <div className="col-md-5 custom-image-box">
        <img src={mining} alt="Mining Guide"/>
      </div>
      <div className="col-md-6 mt-4">
        <h5>What is Mining?</h5>
        <p>
          Mining is the process of verifying blockchain transactions and creating new coins. 
          Miners use powerful computers to solve complex mathematical problems. 
          In return, they receive cryptocurrency rewards like Bitcoin.
        </p>
        <button type="button" className="btn btn-primary btn-custom">
           <a 
            href="https://www.coinbase.com/en-gb/learn/crypto-basics/what-is-mining" 
            target="_blank" 
            rel="noreferrer" 
            style={{ textDecoration: "none", color: "white" }}>Learn More
          </a>
        </button>
      </div>
    </div>
  </div>

</div>


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    )
}

export default Suggested