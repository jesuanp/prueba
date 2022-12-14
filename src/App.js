import Fondo from './components/fondo';
import Nav from './components/nav';
import LandingPage from './components/landingPage';
import Info from './components/info';
import s from './app.module.css';

function App() {
  return (
    <div className='s.app'>
      
      <Fondo />

      <Nav />

      <LandingPage />

      <Info/>

    </div>
  );
}

export default App;
