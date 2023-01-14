import Logo from './assets/images/LogoMain.svg'
import './App.css';
import SignIn from '../src/components/SignIn'

function App() {
  return (
    <div className="App">
      <div className="logoMain">
        <img src={Logo} alt="LogoWobotAI"/>
      </div>
      <div><SignIn/></div>
    </div>
  );
}

export default App;
