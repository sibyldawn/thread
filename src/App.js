import './App.css';
import Feed from './components/Feed'
import FeedByUser from './components/FeedByUser'
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
         <Switch>
             <Route exact path ="/" component={Feed}/>
             <Route path="/posts/:postId" component={Post}/>
             <Route path="/user/:userId" component={FeedByUser}/>
          </Switch>
          </div>
  );
}

export default App;
