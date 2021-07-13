import './App.css';
import Feed from './Feed';
import PostList from './PostList';
import Replybox from './Replybox';
import Catalog from './Catalog'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {

  
  return (
    <div className="App">
      


      <Router>
    <div className="App">
     {/** Header */}
      <Switch>
        <Route path="/catalog">
        {/** Header */}
      
      {/** Home */}
      
      <Catalog/>
      </Route>

      <Route path="/">
        {/** Header */}
      
      {/** Home */}
      <PostList/>
      <Replybox/>
      </Route>
      </Switch>
      
    </div>
    </Router>
    </div>
  );
}

export default App;
