import '../components_analysis/Market_Updates.css'
import { useEffect, useState } from "react";
import Fear_Gread from '../components_analysis/Fear_Gread';
import BitcoinDominance from '../components_analysis/Bitcoin_Dominance';

const Market_Updates = () => {

    const [gainers,setGainers] = useState([])
    const [losers,setLosers] = useState([])

    useEffect(()=>{
        const fetchData =async () => {
            try {
                const gainResult = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc&per_page=5&page=1")
                const gainData =await gainResult.json()
                setGainers(gainData)

                const loseResult = await fetch( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_asc&per_page=5&page=1")
                const loseData = await loseResult.json()
                setLosers(loseData)
            } catch (error) {
                 console.error("Error fetching data:", error);
            }
        }
        fetchData()
    },[])

    return (
        <div className='market_updates'>
            <div className='market_text'><h3>Crypto Market Overview</h3><p>Stay updated on the latest cryptocurrency market trends, including Bitcoin dominance, altcoin season, ETF net flows, and real-time market sentiment, all conveniently accessible in one place on CoinMarketCap.</p></div>
             <div className='market_div'>
            <div className='market_24h'>
                <div className='gainers'>
                    <h3>Gainers 24h</h3>
                {gainers.map((coin,index)=>{
                    return (

                         <li key={coin.id}>
                        <span className="rank">{index + 1}</span>
                        <img src={coin.image} alt={coin.name} className="coin-img" />
                        <span className="name">{coin.name}</span>
                        <span className="price">${coin.current_price}</span>
                        <span className="change positive">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    </li>
                    )
                })}
                </div>
               <div className='losers'>
                <h3>Losers 24h</h3>
                {losers.map((coin, index) => {
                    return (
                    <li key={coin.id}>
                        <span className="rank">{index + 1}</span>
                        <img src={coin.image} alt={coin.name} className="coin-img" />
                        <span className="name">{coin.name}</span>
                        <span className="price">${coin.current_price}</span>
                        <span className="change negative">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    </li>
                    )
                })}
                </div>
                
            </div>
             <div className='index'>
                <Fear_Gread/>
                <BitcoinDominance/>     
            </div>
            </div>
        </div>
    )
}

export default Market_Updates