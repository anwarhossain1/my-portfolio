import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import home from './components/pages/home';
import projects from './components/pages/Projects/projects';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path='/' exact  component={home} />
      <Route path='/projects'  component={projects} />
      <Route path='/'  component={home} />
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
