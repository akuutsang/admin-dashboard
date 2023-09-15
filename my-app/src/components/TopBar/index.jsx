import React from 'react'
import "./style.css"
import { NotificationsActive, LanguageOutlined, SettingsOutlined } from '@mui/icons-material';
import pic from "../../images/cuteBoy.jpg"



export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topleft">
              <div className="logo">
               <div className="text">Kaze<span className='span'>x</span></div>
               <div className="box">
                <div className="boxOne"></div>
                <div className="boxTwo"></div>
               </div>
              </div>
            </div>
            <div className="topright">
                <div className="topbarIconContainer">
                  <NotificationsActive/>
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <LanguageOutlined/>
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <SettingsOutlined/>
                </div>
                <img src={pic} alt="" className='topAvatar' />
            </div>
        </div> 
    </div>
  )
}
