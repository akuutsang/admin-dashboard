import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';


export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitled">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitled">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate"> -1.4 <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitled">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate"> +2.1 <ArrowUpward className="featuredIcon positive"/></span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
    </div>
    
    
  )
}
