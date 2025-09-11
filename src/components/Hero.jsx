import binance from '../assets/img binance.png'
import '../components/Hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left"><h3><span className='text-warning'>BINANCE ACADEMY</span><br/>
                    BLOCKCHAIN & CRYPTO <br/>EDUCATION<br/></h3>
                   <p> Join a Global Community & Learn About Crypto and Blockchain for Free!</p></div>
            <div className="hero-right"> <img src={binance} alt="binance" /></div>
        </div>
    )
}

export default Hero