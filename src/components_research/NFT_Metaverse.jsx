import "../components_research/NFT_Metaverse.css";

const NFT_Metaverse = () => {
  return (
    <div className="nft-metaverse-section">
      <h2 className="section-title">🎨 NFTs dhe Metaverse</h2>
      <div className="nft-metaverse-content">

        <div className="nft-card">
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
            alt="NFT"
          />
          <h3>Çfarë janë NFT-të?</h3>
          <p>
            NFT-të (Non-Fungible Tokens) janë asete dixhitale unike që 
            jetojnë në blockchain. Ato përdoren për art, muzikë, lojëra 
            dhe më shumë, duke i bërë të mundur pronësinë dixhitale.
          </p>
        </div>

        <div className="nft-card">
          <img
            src="https://cryptologos.cc/logos/decentraland-mana-logo.png"
            alt="Metaverse"
          />
          <h3>Metaverse</h3>
          <p>
            Metaverse është një botë virtuale ku përdoruesit mund të 
            ndërveprojnë, blejnë toka dixhitale, ndërtojnë ekonomi dhe 
            përdorin NFT-të për identitet dhe pronësi.
          </p>
        </div>

        <div className="nft-card">
          <img
            src="https://cryptologos.cc/logos/sandbox-sand-logo.png"
            alt="Use Cases"
          />
          <h3>Përdorimet reale</h3>
          <p>
            - Loja dhe tokat dixhitale (Decentraland, Sandbox) <br />
            - Koleksione arti dhe muzikë <br />
            - Identiteti dhe akses në komunitete ekskluzive
          </p>
        </div>

      </div>
    </div>
  );
};

export default NFT_Metaverse;
