import { Switch } from 'react-router-dom';
import './App.css';
import Landing_page from './components/Landing_page/Landing_page';
import {Route} from 'react-router-dom'
import Travel from './components/Travel/Travel';
import Connect from './components/Connect/Connect';
import Contact_us from './components/Contact_Us/Contact_us';
import Recent from './components/Recent/Recent';
import Career from './components/Carrer/Carrer';

function App() {
  return (
    <div className="App">
 
        <Route path="/" exact component={Landing_page}></Route>
        <Route path="/" exact component={Recent}></Route>
        <Route path="/" exact component={Connect}></Route>
       
        <Route path="/travel" exact component={Travel}></Route>
        <Route path="/contact" exact component={Contact_us}></Route>
        <Route path="/carrer" exact component={Career}></Route>
  
   
    </div>
  );
}

export default App;
