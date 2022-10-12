import './Firstsection.css';
import logo from '../images/logo.svg';

function Firstsection(){
    return(
        <div className="Firstsection">
            <img className='ping_logo' src={logo} alt="ping-logo" />
            <h1 className="title_style"><span>We are launching</span> soon!</h1>
            <p className="intro_paragraph">Suscribe and get notified</p>
        </div>
    );
}

export default Firstsection;