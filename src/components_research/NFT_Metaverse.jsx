import "../components_research/NFT_Metaverse.css";
import NFT from '../assets/NFT.jpg'
import Metaverse from '../assets/Metaverse.jpg'
import Game from '../assets/Game.jpg'

const NFT_Metaverse = () => {
  return (
    <div className="nft-metaverse-section">
      <h2 className="section-title">🎨 NFTs and the Metaverse</h2>
      <div className="nft-metaverse-content">

        {/* NFT Card */}
        <div className="nft-card">
          <img src={NFT} alt="NFT" />
          <h3>What are NFTs?</h3>
          <p className="NFT-text" id="nft-section">
            NFTs (Non-Fungible Tokens) are unique digital assets 
            that live on the blockchain. They are used for art, music, 
            gaming, and more, enabling verifiable digital ownership.
          </p>
          <a 
            href="https://www.coinbase.com/learn/crypto-basics/what-is-an-nft" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="read-more-btn"
          >
            Read More
          </a>
        </div>

        {/* Metaverse Card */}
        <div className="nft-card">
          <img src={Metaverse} alt="Metaverse" />
          <h3>The Metaverse</h3>
          <p className="NFT-text">
            The Metaverse is a virtual world where users can interact, 
            purchase digital land, build economies, and use NFTs 
            as identity and ownership assets.
          </p>
          <a 
            href="https://www.coinbase.com/learn/crypto-basics/what-is-the-metaverse" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="read-more-btn"
          >
            Read More
          </a>
        </div>

        {/* Use Cases Card */}
        <div className="nft-card">
          <img src={Game} alt="Use Cases" />
          <h3>Real Use Cases</h3>
          <p className="NFT-text">
            - Virtual games and digital lands (Decentraland, Sandbox) <br />
            - Art and music collectibles <br />
            - Digital identity and access to exclusive communities
          </p>
          <a 
            href="https://www.sandbox.game/en/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="read-more-btn"
          >
            Read More
          </a>
        </div>

      </div>
    </div>
  );
};

export default NFT_Metaverse;
