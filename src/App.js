import './App.css';
import Login from './Component/Login';

import Home from './Component/Home';
// import Quiz from './Component/Quiz';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'



function App() {
  return (
   
    <div className="app">
    <Router>
    <Switch>
    <Route>
     <Route path="/" exact   component={Login}/>
     <Route path="/home"  component={Home}/>
    
    </Route>
    </Switch>
     
   
    
      {/* <Home/> */}
      {/* <Quiz/> */}
    </Router>
    </div>
    
  );
}

export default App;
