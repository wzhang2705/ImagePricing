import './App.css';
import React from 'react';
import LandingPage from './components/landing-page/landing-page';
import AuctionPage from './components/auction-page/auction-page';
import ImagePage from './components/image-page/image-page';
import AllImagesPage from './components/allimages-page/allimages-page';
import LikertPage from './components/likert-page/likert-page';
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TransitionPage from './components/transition-page/transition-page';
import EndingPage from './components/transition-page/ending-page';

function App() {
  var basePath = "/ImagePricing";
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={`${basePath}/`} element={<LandingPage basePath={`${basePath}`}/>} />
          <Route path={`${basePath}/begin`}  element={<AuctionPage basePath={`${basePath}`}/>} />
          <Route path={`${basePath}/image`}  element={<ImagePage basePath={`${basePath}`}/>} />
          <Route path={`${basePath}/bigreveal`} element={<TransitionPage basePath={`${basePath}`}/>} />
          <Route path={`${basePath}/allimages`} element={<AllImagesPage basePath={`${basePath}`}/>} />
          <Route path={`${basePath}/likert`} element={<LikertPage basePath={`${basePath}`}/>} />
          <Route path={`${basePath}/end`} element={<EndingPage basePath={`${basePath}`}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
