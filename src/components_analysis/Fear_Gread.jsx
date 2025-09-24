import { useEffect,useState } from "react";
import '../components_analysis/Fear_Gread.css'

const Fear_Gread = () => {
    const [value, setValue] = useState(null);
    const [label, setLabel] = useState("");
    
useEffect(()=>{
    const fetchData = async () => {
        try {
            const result = await fetch('https://api.alternative.me/fng/?limit=1')
            const data = await result.json()
            const value = Number(data?.data?.[0]?.value??0)
            const label_value = data?.data?.[0]?.value_classification ?? ""
            setValue(value)
            setLabel(label_value)
        } catch (error) {
            console.error('fetch error',error)
        }
    }
    fetchData()
},[])

    if (value === null) {
        return <div className="card p-3">Loading...</div>;
    }

return (
  <div className="card p-3 fear-greed-card">
   <div className="fear-text text-dark fw-bold">
  Fear and Greed Index
  <i
    className="bi bi-info-circle ms-2"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    title='When the value is closer to 0, the market is in Extreme Fear, and investors have over-sold irrationally. When the value is closer to 100, the market is in Extreme Greed, indicating a likely market correction.'
  ></i>
</div>

    <div className="progress custom-progress">
      <div
        className={`progress-bar ${
          value < 30
            ? "bar-fear"
            : value < 60
            ? "bar-neutral"
            : "bar-greed"
        }`}
        role="progressbar"
        style={{ width: `${value}%` }}
      />
    </div>

    <div className="text-center fw-bold">
      <div className="text-dark fs-4">{value}%</div>
      <div className="text-muted">{label}</div>
    </div>
  </div>
);

}

export default Fear_Gread