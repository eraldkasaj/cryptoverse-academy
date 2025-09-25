import '../pages/Research.css'
import Navbar from '../components_home/Navbar'
import Top_Picks_News from '../components_research/Top_Picks_News'
import Deep_Dives from '../components_research/Deep_Dives'
import NFT_Metaverse from '../components_research/Nft_Metaverse'
import Footer from '../components_home/Footer'

const Research = () => {
   
    return (
        <div>
            <Navbar/>
            <Top_Picks_News/>
            <Deep_Dives/>
            <NFT_Metaverse/>
            <Footer/>
        </div>
    )
}

export default Research