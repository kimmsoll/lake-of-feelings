import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './routes/login/login';
import Write from './routes/write/write';
import Lake from './routes/lake/lake';

function App({googleAuth}) {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login googleAuth={googleAuth}/>
      </Route>
      <Route path="/write">
        <Write googleAuth={googleAuth}/>
      </Route>
      <Route path="/lake">
        <Lake googleAuth={googleAuth}/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
