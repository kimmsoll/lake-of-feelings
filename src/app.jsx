import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './routes/login/login';
import Home from './routes/home/home';
import Detail from './routes/detail/detail';

function App({googleAuth}) {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login googleAuth={googleAuth}/>
      </Route>
      <Route exact path="/home">
        <Home googleAuth={googleAuth}/>
      </Route>
      <Route path="/:id">
        <Detail/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
