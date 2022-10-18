import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Main from './routes/Main';
import Hello from './routes/Hello';
import './router.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Router() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={800}>
        <Routes>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/" element={<Hello />}></Route>
          <Route path="*" element={<Hello />}></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
export default Router;
