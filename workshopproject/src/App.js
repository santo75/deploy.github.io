import { Switch } from 'react-router-dom';
import './App.css';
import Landing_page from './components/Landing_page/Landing_page';
import {Route} from 'react-router-dom'
import Travel from './components/Travel/Travel';
import Connect from './components/Connect/Connect';

function App() {
  return (
    <div className="App">
 
        <Route path="/" exact component={Landing_page}></Route>
        <Route path="/" exact component={Connect}></Route>
        <Route path="/travel" exact component={Travel}></Route>
  
   
    </div>
  );
}

export default App;
