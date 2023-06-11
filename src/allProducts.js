import "./allProducts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import camiseta from './imgs/camisetaStock.jpg'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function addedMessage() {

    alert("Succesfully added to cart!")

}

const AllProducts = () => {
    return ( 

        <div className="allProductsPage">
            <h2 className="productsTitle">Produtos</h2>
            <div className="searchBar">
                <input type="text" placeholder="Buscar"/>
                <FontAwesomeIcon icon={ faSearch } className="searchIcon" />
            </div>
            <div className="filterWrapper">
                <a className="filterBtn">Filtrar</a>
            </div>
            <div class="productHolder">
                <button id="addToCart" onClick={addedMessage}>
                    <FontAwesomeIcon icon = { faShoppingCart } className="cartIcon"></FontAwesomeIcon>
                </button>
                <img src={ camiseta } className='camisetaImg'></img>
            </div>
        </div>

     );
}
 
export default AllProducts;