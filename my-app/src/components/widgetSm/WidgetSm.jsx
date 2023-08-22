import "./widgetSm.css"
import { Visibility } from '@mui/icons-material';


export default function WidgetSm() {
  return (
    <div className="widgetSm">
     <span className="widgetSmTitle">New Join Members</span>
     <ul className="widgetSmList">
      <li className="widgetSmListItem">
        <img src="./assets/cuteCat.jpg" alt="" className='widgetSmImg'/>
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Akutsang Kaze</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility />
          display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src="./assets/cuteCat.jpg" alt="" className='widgetSmImg'/>
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Akutsang Kaze</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility />
          display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src="./assets/cuteCat.jpg" alt="" className='widgetSmImg'/>
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Akutsang Kaze</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility />
          display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src="./assets/cuteCat.jpg" alt="" className='widgetSmImg'/>
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Akutsang Kaze</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility />
          display
        </button>
      </li>
      <li className="widgetSmListItem">
        <img src="./assets/cuteCat.jpg" alt="" className='widgetSmImg'/>
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Akutsang Kaze</span>
          <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
        <button className="widgetSmButton">
          <Visibility />
          display
        </button>
      </li>
     </ul>
    </div>
  )
}
