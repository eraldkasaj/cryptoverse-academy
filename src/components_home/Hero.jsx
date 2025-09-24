
import '../components_home/Hero.css'
import heroVideo from '../assets/video-section.mp4'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left"><h3><span className='main_word'>BINANCE ACADEMY</span><br/>
                    BLOCKCHAIN & CRYPTO <br/>EDUCATION<br/></h3>
                   <p> Join a Global Community & Learn About Crypto and Blockchain for Free!</p></div>
            <div className="hero-right"> 
                   <video autoPlay loop muted playsInline>
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
        </div>
    )
}

export default Hero