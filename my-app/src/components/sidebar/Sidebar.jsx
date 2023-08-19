import "./sidebar.css"
import {  LineStyle, Timeline, TrendingUp, Storefront, Person, AttachMoney, BarChart, Markunread, DynamicFeed, ChatBubble, Work, Report } from '@mui/icons-material';


export default function sideBar() {
  return (
    <div className="sideBar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home   
                    </li>
                    <li className="sidebarListItem">
                        <Timeline sidebarIcon/>
                        Analytics   
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp sidebarIcon/>
                        Sales  
                    </li>
                </ul>

            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Person className="sidebarIcon"/>
                        User   
                    </li>
                    <li className="sidebarListItem">
                        <Storefront sidebarIcon/>
                        Products   
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney sidebarIcon/>
                        Transaction  
                    </li>
                    <li className="sidebarListItem">
                        <BarChart />
                        Reports  
                    </li>
                    
                </ul>

            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Markunread className="sidebarIcon"/>
                       Mail   
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed sidebarIcon/>
                        Feedback   
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubble sidebarIcon/>
                        Messages  
                    </li>
                </ul>

            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        Manage   
                    </li>
                    <li className="sidebarListItem">
                        <Timeline sidebarIcon/>
                        Analytics   
                    </li>
                    <li className="sidebarListItem">
                        <Report sidebarIcon/>
                        Report  
                    </li>
                </ul>

            </div>
            
            
        </div>
        
    </div>
  )
}
