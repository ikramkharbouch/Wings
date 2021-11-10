import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home'
import Login from './Login'
import Posts from './Posts'

import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import WithAuth from './Auth/WithAuth'

function App() {

  return (
    <Router>
      <div className="h-full">
        <Navbar />
        <Routes>
          <Route exact path="/"
            element={
                <WithAuth To="/login">
                  <Home />
                </WithAuth>
            } />
            <Route exact path="/posts"
            element={
                <WithAuth To="/login">
                  <Posts />
                </WithAuth>
            } />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
