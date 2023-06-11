import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import camiseta from "./imgs/camisetaStock.jpg";

const Home = () => {
    return ( 
        
        <div className="Homepage">
            <div class="last">Última coleção</div>
            <div class="big-rectangle">
                <FontAwesomeIcon icon = { faChevronRight} className='fa-chevron-right'/>
                <FontAwesomeIcon icon = { faChevronLeft } className='fa-chevron-left' />
            </div>
            <div class="small-rectangles">
                <div class="small-rectangle1">
                    <img src={ camiseta } className='camisetaImg'></img>
                    <a class="camisetas" href='/all-products/camisetas'>Camisetas</a>
                </div>
                <div class="small-rectangle2">
                    <a class="bermudas">Bermudas</a>
                </div>
                <div class="small-rectangle3">
                    <a class="acessorios">Acessórios</a>
                </div>
            </div>
            <div class="all-btn">
                <a class="todos-produtos" href='/all-products'>Todos os Produtos</a>
            </div>
        </div>

    );
}
 
export default Home;