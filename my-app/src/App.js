import AppHeader from './components/AppHeader';
// import AppFooter from './components/AppFooter';
import PageContent from './components/PageContent';
import SideMenu from './components/SideMenu';

import './App.css';
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      {/* <Space> */}
        <SideMenu></SideMenu>
        <PageContent></PageContent>
     {/* </Space> */}
      <AppFooter />
    </div>
  );
}

export default App;
