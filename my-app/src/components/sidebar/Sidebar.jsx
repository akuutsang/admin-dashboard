import "./sidebar.css"
import {  LineStyle, Timeline, TrendingUp } from '@mui/icons-material';


export default function sideBar() {
  return (
    <div className="sideBar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle/>
                        Home   
                    </li>
                    <li className="sidebarListItem">
                        <Timeline/>
                        Analytics   
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp/>
                        Sales  
                    </li>
                </ul>

            </div>
        </div>
    </div>
  )
}
