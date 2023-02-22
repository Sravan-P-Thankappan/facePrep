import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/login/Login';
import Home from './component/home/Home';
import { UserAuth } from './util/AuthContext';
import PrivateRoute from './util/PrivateRoute';
import Error from './component/error/Error';
function App() {

  return (
    <div>
      <UserAuth>

        <Router>
          <Routes>

            <Route exact path='/' element={<Login />} />

            <Route element={<PrivateRoute />} >
              <Route path='/home' element={<Home />} />
            </Route>
            <Route path='*' element={<Error/>} />
          </Routes>
        </Router>

      </UserAuth>

    </div>
  );
}

export default App;
