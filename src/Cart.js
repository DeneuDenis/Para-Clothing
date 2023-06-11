import './Cart.css'

let totalPrice = 20.00;

const Cart = () => {
    return ( 
        <div className='CartPage'>
            <h2 className='yourCart'>Seu carrinho</h2>
            <h2 className='price'>Total:R${ totalPrice }</h2>
            <div className='productRectangle'>
                <a className='productId'>1</a>
                <a className='productName'>Nome do Produto</a>
                <a className='productPrice'>R$ 20.00</a>
                <div className='quantityWrapper'>
                    <a className='quantity'>1</a>
                </div>
            </div>
            <div className='endWrapper'>
                <a className='endBtn' href='/congrats'>Finalizar</a>
            </div>
        </div>
     );
}
 
export default Cart;