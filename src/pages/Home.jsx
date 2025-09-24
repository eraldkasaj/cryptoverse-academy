import Navbar from "../components_home/Navbar"
import Hero from "../components_home/Hero"
import Categories from "../components_home/Categories"
import Suggested from "../components_home/Suggested"
import Latest_Content from "../components_home/Latest_Content"
import Crypto_Trading from "../components_home/Crypto_Trading"
import Footer from "../components_home/Footer"

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