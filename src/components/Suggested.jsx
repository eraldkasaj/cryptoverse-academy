import '../components/Suggested.css'
import binance from '../assets/img binance.png'
import binance_logo from '../assets/binance_logo.png'

const Suggested = () => {

    return (
    <div className='suggested'>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators ">
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
          <img src={binance} className="" alt="slide1"/>
        </div>
        <div className="col-md-6 mt-4">
          <h5>Earn Your First Bitcoin</h5>
          <p>New to crypto? Learn how Bitcoin works and complete a short quiz to earn BTC — new users only.</p>
         <button type="button" className="btn btn-primary btn-custom">
         Get Started
        </button>

        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-5 custom-image-box">
          <img src={binance_logo} className="" alt="slide2"/>
        </div>
        <div className="col-md-6 mt-4">
          <h5>Beginner Track</h5>
          <p>The Beginner Track provides an introductory overview of the blockchain ecosystem to equip beginners with the fundamental concepts needed to navigate the cryptocurrency space.</p>
         <button type="button" className="btn btn-primary btn-custom">
         Get Started
        </button>

        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-5 custom-image-box">
          <img src={binance} className="" alt="slide3"/>
        </div>
         <div className="col-md-6 mt-4">
          <h5>Intermediate Track</h5>
          <p>The Intermediate Track offers a deep dive into the intricacies of blockchain technology, designed to advance the expertise of those familiar with the basics of cryptocurrencies.</p>
         <button type="button" className="btn btn-primary btn-custom">
         Get Started
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