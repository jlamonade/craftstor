import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
