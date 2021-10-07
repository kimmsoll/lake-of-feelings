import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './routes/login/login';

function App({googleAuth}) {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login googleAuth={googleAuth}/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
