import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import home from './components/pages/home';
import projects from './components/pages/Projects/projects';
import Footer from './components/Footer/Footer';
import Aboutme from './components/pages/AboutMe/Aboutme';
import Contactform from './components/pages/ContactForm/Contactform';

function App() {
  return (
    <BrowserRouter>
   
    <NavBar/>
    <Switch>
      <Route path='/' exact  component={home} />
      <Route path='/projects'  component={projects} />
      <Route path='/about-me'  component={Aboutme} />
      <Route path='/contact'  component={Contactform} />
    </Switch>
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
