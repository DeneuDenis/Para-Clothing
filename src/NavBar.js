import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSignIn, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function showMenu() {

    document.getElementById("menu").style["transform"] = "translateX(0)";

}

const NavBar = () => {
    return ( 

        <div className='navbar'>
            
            <nav className = "barra-superior">
                <a href='/home' className="Navtitle">Para Clothing</a>
                <FontAwesomeIcon icon = { faBars } className='fa-bars' />
                <button id = "checkNav" onClick={showMenu}></button>
                <FontAwesomeIcon icon = { faShoppingCart } className='fa-shopping-cart' />
                <a href='/cart' id="cartBtn" />
            </nav>
            <div class="menu" id='menu'>
                <a href='/login' id='login'>Login
                    <FontAwesomeIcon icon = { faSignIn } />
                </a>
                <a href='/notYet' id='help'>Ajuda
                    <FontAwesomeIcon icon= { faQuestionCircle } />
                </a>  
            </div>
        </div>

     );
}
 
export default NavBar;