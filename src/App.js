
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   // will only run once when the app component loads...

  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
           {/* <Login />  */}
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
