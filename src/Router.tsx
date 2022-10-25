import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './routes/Main';
import Hello from './routes/Hello';
import NFTFirst from '././routes/afterCW/NFT_First';
import NFTloading from './routes/afterCW/NFT_loading';
import NFTMain from './routes/afterCW/NFT_Main';
import Game from './routes/afterCW/Game';
import Bet from './routes/afterCW/Bet';
import Market from './routes/afterCW/NFT_Market';
import './router.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NFTform from './routes/afterCW/NFT_form';

function Router() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={800}>
        <Routes>
          <Route path="/start" element={<NFTFirst />}></Route>
          <Route path="/whoyou" element={<NFTform />}></Route>
          <Route path="/loading" element={<NFTloading />}></Route>
          <Route path="/market" element={<Market />}></Route>
          <Route path="/myNFT" element={<NFTMain />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/bet" element={<Bet />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/" element={<Hello />}></Route>
          <Route path="*" element={<Hello />}></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
export default Router;
