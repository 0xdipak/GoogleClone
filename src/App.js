import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import {AppContext} from './utils/ContextApi'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/" exact element={<SearchResult />} />
      </Routes>
    </Router>
  );
}

export default App;
