import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/TopBar";
import "./app.css"
function App() {
  return (
    <div> 
      <Topbar/> 
      <div className="container">
        <Sidebar/>
        <div className="others">other item</div>
      </div>
      

      
    </div>
  );
}

export default App;
