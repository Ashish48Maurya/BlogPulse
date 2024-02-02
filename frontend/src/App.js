import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CreateBlog from './components/CreateBlog';
import Posts from './components/Posts';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/login"
          element={<Login />}
        />
        <Route
          exact
          path="/register"
          element={<Register />}
        />
        <Route
          exact
          path="/posts"
          element={<Posts />}
        />
        <Route
          exact
          path="/post"
          element={<CreateBlog/>}
        />
        <Route
          exact
          path="/"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
