import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed'
import Post from './components/Post'
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/:postId/comments">Post</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Feed/>
          </Route>
          <Route path="/:postId/comments">
            <Post />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
