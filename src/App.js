import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';

// STYLES
import './styles/index.scss';

// PAGES
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div> Loading... </div>}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

