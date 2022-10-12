import './App.css';

//components
import Firstsection from './components/Firstsection';
import Inputs from './components/Inputs';
import Socialshare from './components/Socialshare';

//images and icons
import illustration from './images/illustration-dashboard.png';

function App() {
  return (
    <div className="App">
      <Firstsection />
      <Inputs />
      <div className="image_container">
        <img className='dashboar_image' src={illustration} alt="illustration-dashboard" />
      </div>
      <Socialshare />
      <div className="coyright_container">
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
