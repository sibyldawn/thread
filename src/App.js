import './App.css';
import Feed from './components/Feed'
import Post from './components/Post'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = ()=> {
  return (
    <div className="App">
       <Header/>
      <Router>
         <Switch>
             <Route exact path ="/" component={Feed}/>
             <Route path="/:postId" component={Post}/>
          </Switch>
        </Router>
          </div>
  );
}

export default App;
