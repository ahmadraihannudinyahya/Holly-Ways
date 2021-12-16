import Main from "./pages/Main";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/fund/:id" component={Detail} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
