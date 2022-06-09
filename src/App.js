
import './App.css';
import PostList from './API/PostList';
import PostForm from './API/PostForm';
import Delete from './API/Delete';
import Update from './API/Update';

function App() {
  return (
    <div >
  <PostList/>
  <PostForm/>
  <Delete/>
  <Update/>
    </div>
  );
}

export default App;
