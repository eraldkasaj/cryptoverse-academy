import '../components_research/Deep_Dives.css'


const Deep_Dives = () => {
  return (
    <section className="tokenomics container">
      <header className="tok-header">
        <h2>🔎 Deep Dive: Tokenomics / Ekonomia e Monedhës</h2>
        <p className="tok-sub text-light">
          Si shpërndahen token-at, si ndikojnë inflacioni/deflacioni dhe pse
          përdorimi real brenda ekosistemit është kyç për vlerën afatgjatë.
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
              <circle cx="80" cy="80" r="60" fill="url(#g1)" opacity="0.35"/>
              <circle cx="140" cy="80" r="60" fill="url(#g1)" opacity="0.55"/>
              <g fill="#0ea5e9">
                <rect x="30" y="120" width="24" height="18" rx="4"/>
                <rect x="70" y="110" width="24" height="28" rx="4"/>
                <rect x="110" y="98" width="24" height="40" rx="4"/>
                <rect x="150" y="86" width="24" height="52" rx="4"/>
              </g>
            </svg>
          </div>
          <h3>1 Si shpërndahen token-at</h3>
          <ul className="tok-list">
            <li><strong>ICO/IDO:</strong> shitje e hershme për ngritje kapitali.</li>
            <li><strong>Ekipi & themeluesit:</strong> zakonisht me <em>vesting</em> që të shmanget shitja e menjëhershme.</li>
            <li><strong>Mining / Staking rewards:</strong> shpërblime për sigurinë e rrjetit.</li>
            <li><strong>Treasury / Fondacioni:</strong> partneritete dhe zhvillim i ardhshëm.</li>
            <li><strong>Komuniteti / Airdrops:</strong> shpërblime për përdorues të hershëm.</li>
          </ul>
          <div className="tok-note">
            Shembull: <b>BNB</b> – ICO + alokim për ekipin + mekanizëm “burn”.
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
              <circle cx="220" cy="40" r="6" fill="#10b981"/>
              <circle cx="220" cy="110" r="6" fill="#ef4444"/>
            </svg>
          </div>
          <h3>2 Inflacioni / Deflacioni</h3>
          <p>
            <strong>Inflacioni</strong> rrit ofertën në qarkullim dhe ul vlerën nëse kërkesa nuk rritet.
            <br/>
            <strong>Deflacioni</strong> e ul ofertën (p.sh. me <em>burn</em>) dhe mund të rrisë vlerën me kohë.
          </p>
          <ul className="tok-list">
            <li><b>Dogecoin:</b> pa kufi maksimal → ofertë që rritet çdo vit.</li>
            <li><b>BNB & ETH (EIP-1559):</b> djegie e pjesës së tarifave → presion deflacionar.</li>
          </ul>
          <div className="tok-note">
            Balancimi i shpërblimeve me ruajtjen e vlerës është thelbësor.
          </div>
        </article>

      
        <article className="tok-card">
          <div className="tok-illustration">
          
            <svg viewBox="0 0 240 160" className="svg-illu" aria-hidden="true">
              <rect x="18" y="30" width="60" height="40" rx="8" fill="#6366f1" opacity="0.9"/>
              <rect x="90" y="30" width="60" height="40" rx="8" fill="#22c55e" opacity="0.9"/>
              <rect x="162" y="30" width="60" height="40" rx="8" fill="#0ea5e9" opacity="0.9"/>
              <path d="M48,70 C48,100 120,100 120,70" stroke="#64748b" strokeWidth="3" fill="none"/>
              <path d="M120,70 C120,100 192,100 192,70" stroke="#64748b" strokeWidth="3" fill="none"/>
              <circle cx="120" cy="104" r="10" fill="#f59e0b"/>
            </svg>
          </div>
          <h3>3 Përdorimi real në ekosistem</h3>
          <ul className="tok-list">
            <li><b>Utility:</b> pagesa e <em>gas fees</em> (ETH/BNB), akses në shërbime (p.sh. LINK).</li>
            <li><b>Governance:</b> votime për vendimet e protokollit (p.sh. UNI).</li>
            <li><b>Staking / Siguria:</b> kolateral për rrjetin (p.sh. ETH, ADA).</li>
            <li><b>Incentives:</b> shpërblime për LP, validatorë, etj.</li>
          </ul>
          <div className="tok-note">
            Token pa përdorim real → vlerë afatshkurtër; me utility → ekosistem i qëndrueshëm.
          </div>
        </article>
      </div>

      <footer className="tok-footer">
        <p>
          <b>Përfundim:</b> Tokenomics i qëndrueshëm = shpërndarje transparente, mekanizëm ofertë-kërkesë i
          menduar mirë dhe përdorim real brenda protokollit.
        </p>
      </footer>
    </section>
  );
}

export default Deep_Dives