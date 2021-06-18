import './App.css';
import Feed from './Feed';
import PostList from './PostList';
import Replybox from './Replybox';

function App() {

  
  return (
    <div className="App">
      <h1>Calmboard</h1>
      <PostList/>
      <Replybox/>
    </div>
  );
}

export default App;
