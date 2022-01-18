import Welcome from "./component/Welcome/Welcome";
import K from "./component/K/K";
import {Switch, Route} from "react-router-dom";
import "./App.css";
const App = ()=>{
  return (
    <div className="App">
      <Switch>
        <Route path="/k" component={K} />
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  );
}


export default App;
