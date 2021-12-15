import ListFund from "./component/common/ListFund";
import Navbar from "./component/common/Navbar";
import FundDetail from "./component/FundDetail";
import Landing from "./component/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ListFund />
    </div>
  );
}

export default App;
