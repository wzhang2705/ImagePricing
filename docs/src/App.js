import './App.css';
import LandingPage from './components/landing-page/landing-page';
import AuctionPage from './components/auction-page/auction-page';
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  var basePath = "/ImagePricing";
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={`${basePath}/`} element={<LandingPage basePath={`${basePath}`}/>} />
          <Route path={`${basePath}/begin`}  element={<AuctionPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
