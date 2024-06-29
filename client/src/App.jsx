import './App.css'
import PostList from "./features/posts/PostsList"

function App() {
  return <>
  <div className="app">
    <h1>React On Rails Blog</h1>
    <p>Find this applicataion layout in client/src/App.jsx</p>
    <PostList />
  </div>
  </>
}

export default App
