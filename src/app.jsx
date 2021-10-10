import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './routes/login/login';
import Home from './routes/home/home';
import Detail from './routes/detail/detail';

function App({googleAuth, emotionRepo}) {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login googleAuth={googleAuth}/>
      </Route>
      <Route path="/home">
        <Home
        googleAuth={googleAuth}
        emotionRepo={emotionRepo}
        />
      </Route>
      <Route path="/emotion/:id">
        <Detail
        emotionRepo={emotionRepo}
        />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
