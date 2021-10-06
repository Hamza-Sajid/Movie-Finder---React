import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Main from "./components/Main"
import Upcoming from "./components/Upcoming";
import Todayshow from "./components/Todayshow";
import Footer from "./components/Footer";
function App() {
return(

<>
<Router>

<Header/>
<Switch>
<Route exact path='/'>
            <Main/>
          </Route>

<Route exact path='/Main'>
            <Main/>
          </Route>
          <Route path="/HomePage">
<HomePage/>
      </Route>
      <Route path="/Upcoming">
            <Upcoming/>
            </Route>

            <Route path="/Todayshow">
            <Todayshow/>
            </Route>
</Switch>

<Footer/>

</Router>


</>

)

}

export default App;
