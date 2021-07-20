import Navbar from './Navbar';
import Exercise from './Exercise';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './SignUp';
import ExerciseDetails from './ExerciseDetails';
import NotFound from './NotFound';
import Welcome from './Welcome';
import Menu from './Menu';
import { UserContext } from "./UserContext";
import { LangContext } from "./LangContext";
import {useState, useMemo} from 'react';
import Nutrition from './Nutrition';
import Profile from './Profile';
import Help from './Help';






function App() {

  const [user, setUser] = useState(null);
  const [lang, setLang] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const valuelang = useMemo(() => ({ lang, setLang }), [lang, setLang ]);

  return (
    <Router>
      <LangContext.Provider value={valuelang}>
      <div className="App">
        <UserContext.Provider value={value}>
          <Navbar/>
        </UserContext.Provider>
        <Help/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Welcome/>
            </Route>
            <Route path="/menu">
              <Menu/>
            </Route>
            <Route path="/exerciselist">
              <Exercise/>
            </Route>
            <Route path="/nutrition">
              <Nutrition/>
            </Route>
            <Route path="/profiles/:id">
              <Profile/>
              </Route>
            <Route path="/exercises/:id">
              <ExerciseDetails/>
            </Route>
            <UserContext.Provider value={value}>
            <Route path="/signup">
              <SignUp/>
            </Route>
            </UserContext.Provider>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>

      </div>
      </LangContext.Provider >
    </Router>
  );
}

export default App;
