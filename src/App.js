import Main from "./pages/Main";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fund/:id" component={Detail} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
