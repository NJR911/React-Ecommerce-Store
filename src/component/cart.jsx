import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../reducers/cartSlice'; 

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };


    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart</h1>
            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h5>{item.title}</h5>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-cart-message">Your cart is empty</p>
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cart-total">
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
}
