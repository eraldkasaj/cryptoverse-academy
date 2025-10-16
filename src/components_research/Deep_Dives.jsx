import '../components_research/Deep_Dives.css'

const Deep_Dives = () => {
  return (
    <section className="tokenomics container">
      <header className="tok-header">
        <h2>🔎 Deep Dive: Tokenomics / Coin Economy</h2>
        <p className="tok-sub text-light">
          How tokens are distributed, how inflation/deflation affects them, 
          and why real utility within the ecosystem is key for long-term value.
        </p>
      </header>

      <div className="tok-grid">
        <article className="tok-card">
          <div className="tok-illustration">
            <svg viewBox="0 0 240 160" className="svg-illu" aria-hidden="true">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#6ee7b7" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="60" fill="url(#g1)" opacity="0.35" />
              <circle cx="140" cy="80" r="60" fill="url(#g1)" opacity="0.55" />
              <g fill="#0ea5e9">
                <rect x="30" y="120" width="24" height="18" rx="4" />
                <rect x="70" y="110" width="24" height="28" rx="4" />
                <rect x="110" y="98" width="24" height="40" rx="4" />
                <rect x="150" y="86" width="24" height="52" rx="4" />
              </g>
            </svg>
          </div>
          <h3>1. Token Distribution</h3>
          <ul className="tok-list">
            <li><strong>ICO/IDO:</strong> early sale to raise capital.</li>
            <li><strong>Team & Founders:</strong> usually with <em>vesting</em> to avoid instant sell-offs.</li>
            <li><strong>Mining / Staking rewards:</strong> incentives for network security.</li>
            <li><strong>Treasury / Foundation:</strong> partnerships and future development.</li>
            <li><strong>Community / Airdrops:</strong> rewards for early or active users.</li>
          </ul>
          <div className="tok-note">
            Example: <b>BNB</b> – ICO + team allocation + “burn” mechanism.
          </div>
        </article>

        <article className="tok-card">
          <div className="tok-illustration">
            <svg viewBox="0 0 240 160" className="svg-illu" aria-hidden="true">
              <polyline
                points="20,120 60,90 100,100 140,60 180,70 220,40"
                fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round"
              />
              <polyline
                points="20,60 60,80 100,70 140,95 180,85 220,110"
                fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" opacity="0.85"
              />
              <circle cx="220" cy="40" r="6" fill="#10b981" />
              <circle cx="220" cy="110" r="6" fill="#ef4444" />
            </svg>
          </div>
          <h3>2. Inflation / Deflation</h3>
          <p>
            <strong>Inflation</strong> increases circulating supply and decreases value 
            if demand doesn’t rise accordingly.
            <br />
            <strong>Deflation</strong> reduces supply (e.g., through <em>burns</em>) 
            and can increase value over time.
          </p>
          <ul className="tok-list">
            <li><b>Dogecoin:</b> no max supply → continuously increasing issuance.</li>
            <li><b>BNB & ETH (EIP-1559):</b> burning part of fees → deflationary pressure.</li>
          </ul>
          <div className="tok-note">
            Balancing rewards and value preservation is essential.
          </div>
        </article>

     
        <article className="tok-card">
          <div className="tok-illustration">
            <svg viewBox="0 0 240 160" className="svg-illu" aria-hidden="true">
              <rect x="18" y="30" width="60" height="40" rx="8" fill="#6366f1" opacity="0.9" />
              <rect x="90" y="30" width="60" height="40" rx="8" fill="#22c55e" opacity="0.9" />
              <rect x="162" y="30" width="60" height="40" rx="8" fill="#0ea5e9" opacity="0.9" />
              <path d="M48,70 C48,100 120,100 120,70" stroke="#64748b" strokeWidth="3" fill="none" />
              <path d="M120,70 C120,100 192,100 192,70" stroke="#64748b" strokeWidth="3" fill="none" />
              <circle cx="120" cy="104" r="10" fill="#f59e0b" />
            </svg>
          </div>
          <h3>3. Real Utility in the Ecosystem</h3>
          <ul className="tok-list">
            <li><b>Utility:</b> paying <em>gas fees</em> (ETH/BNB), accessing services (e.g., LINK).</li>
            <li><b>Governance:</b> voting on protocol decisions (e.g., UNI).</li>
            <li><b>Staking / Security:</b> collateral for the network (e.g., ETH, ADA).</li>
            <li><b>Incentives:</b> rewards for LPs, validators, and contributors.</li>
          </ul>
          <div className="tok-note">
            Tokens without real use → short-term hype; with utility → sustainable ecosystems.
          </div>
        </article>
      </div>

      <footer className="tok-footer">
        <p>
          <b>Conclusion:</b> Sustainable tokenomics = transparent distribution, 
          well-balanced supply-demand mechanisms, and real ecosystem utility.
        </p>
      </footer>
    </section>
  );
};

export default Deep_Dives;
