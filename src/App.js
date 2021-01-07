import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakout from './games/break';

function App() {
  return (
    <div>
          <Breakout />
     </div>
     );
    }
    export default App;
  //   // <Router>
  //   // <div>
  //   //   <nav>
  //   //     <ul>
  //   //       <li>
  //   //         <Link to="/">Home</Link>
  //   //       </li>
  //   //       <li>
  //   //         <Link to="/breakout">About</Link>
  //   //       </li>
  //   //     </ul>
  //   //   </nav>

  //    // {/* A <Switch> looks through its children <Route>s and
  //         renders the first one that matches the current URL. */}
  //   //  <Switch>
  //       //<Route path="/breakout">
        
  //       //</Route>
  //       //<Route path="/">
  //         <h1>Home</h1>
  //      // </Route>
  //     //</Switch>
   
  // //</Router>



