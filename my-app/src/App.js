import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/TopBar";
import Home from "./pages/home/Home"
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductsList from "./pages/productsList/ProductsList";
import Products from "./pages/products/Products";


function App() {
  return (
    <Router> 
      <Topbar/> 
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:id">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/product/:id">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
