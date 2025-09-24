import '../pages/Analysis.css'
import Market_Updates from '../components_analysis/Market_Updates'
import Navbar from '../components_home/Navbar'
import Bitcoin_Cap from '../components_analysis/Bitcoin_Cap'
import Top_Coins from '../components_analysis/Top_Coins'
import Footer from '../components_home/Footer'

const Analysis = () => {
    return (
        <div>
            <Navbar/>
            <Market_Updates/>
            <Bitcoin_Cap/>
            <Top_Coins/>
            <Footer/>
        </div>
    )
}

export default Analysis