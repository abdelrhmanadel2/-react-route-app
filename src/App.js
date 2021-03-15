import './App.css';
import  Navbarcomp  from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Routing,Switch,Route, Router} from 'react-router-dom';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import Home from './views/Home';
import About from './views/About';
import Proudectpageview from './views/Proudectpage';
function App() {
  return (
    <div>
               
    <div className="App">
<Routing >
<Navbarcomp/>
<header className="App-header">
      <div className="container">
      
        <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/proudect/:id" component={Proudectpageview} />

</Switch>
</div>      </header>
      </Routing>
    </div>
    </div>
  );
}

export default App;
