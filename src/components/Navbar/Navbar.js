import logo from '../../assets/logos/logo_positivus_dark.png';
import './Navbar.scss'

function Navbar(){
    return (
        <nav className='container navbar'>
            <img src={logo} alt="Logo Positivus" />
            <ul className='paragraph'>
                <li>About us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <button className='btn-secondary'>Request a quote</button>
        </nav>
    )
}

export default Navbar;