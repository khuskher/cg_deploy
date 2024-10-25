import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Post from './pages/Report';
import Feed from './pages/Feed';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div style={{width: '100%'}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/report" component={Post} />
          <Route path="/feed" component={Feed} />       

          <Route path="/error" component={NoPage} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}
export default App;
