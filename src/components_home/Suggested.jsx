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
          <img src={blockchain} className="" alt="slide1"/>
        </div>
        <div className="col-md-6 mt-4">
          <h5>Çfarë është Blockchain?</h5>
          <p>Mendo blockchain si një libër i madh publik:

              Çdo faqe = një bllok me transaksione.

              Libri ruhet në qindra kopje në kompjuterë të ndryshëm.

              Nëse dikush përpiqet të ndryshojë një faqe, do dallojë menjëherë sepse nuk përputhet me kopjet e tjera.</p>
         <button type="button" className="btn btn-primary btn-custom">
        Lexo me shume
        </button>

        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-5 custom-image-box">
          <img src={defi} className="" alt="slide2"/>
        </div>
        <div className="col-md-6 mt-4">
          <h5>Beginner Track</h5>
          <p>The Beginner Track provides an introductory overview of the blockchain ecosystem to equip beginners with the fundamental concepts needed to navigate the cryptocurrency space.</p>
         <button type="button" className="btn btn-primary btn-custom">
        Learn More
        </button>

        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-5 custom-image-box">
          <img src={mining} className="" alt="slide3"/>
        </div>
         <div className="col-md-6 mt-4">
          <h5>Intermediate Track</h5>
          <p>The Intermediate Track offers a deep dive into the intricacies of blockchain technology, designed to advance the expertise of those familiar with the basics of cryptocurrencies.</p>
         <button type="button" className="btn btn-primary btn-custom">
        Learn More
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