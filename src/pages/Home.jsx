import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Categories from "../components/Categories"
import Suggested from "../components/Suggested"
import Latest_Content from "../components/Latest_Content"
import Crypto_Trading from "../components/Crypto_Trading"
import Footer from "../components/Footer"

const Home = () => {
    return (
      <div className="home">
      <Navbar/>
      <Hero/>
      <Categories/>
      <Suggested/>
      <Latest_Content/>
      <Crypto_Trading/>
      <Footer/>
      </div>
      
    )
}

export default Home