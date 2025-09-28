import '../components_home/Hero.css'
import heroVideo from '../assets/video-section.mp4'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="hero">
            {/* Teksti Majtas */}
            <motion.div 
                className="hero-left"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h3>
                    <span className='main_word'>BINANCE ACADEMY</span><br/>
                    BLOCKCHAIN & CRYPTO <br/>EDUCATION<br/>
                </h3>
                <p>Join a Global Community & Learn About Crypto and Blockchain for Free!</p>
            </motion.div>

            {/* Video Djathtas */}
            <motion.div 
                className="hero-right"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <video autoPlay loop muted playsInline>
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </div>
    )
}

export default Hero
