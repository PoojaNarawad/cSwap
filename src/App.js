import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Overview from "./Components/Overview/Overview";
import PoolOverview from "./Components/Overview/PoolOverview";
import TokensOverview from "./Components/Overview/TokensOverview";
import Pool from "./Components/Pool/Pool";
import Tokens from "./Components/Tokens/Tokens";


function App() {
  return (
    <Router>
    
    <Header/>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/pool" element={<Pool/>} />
        <Route path="/pooloverview" element={<PoolOverview />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/tokensoverview" element={<TokensOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
