import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/TopBar";
import Home from "./pages/home/Home"
import "./app.css"
function App() {
  return (
    <div> 
      <Topbar/> 
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
