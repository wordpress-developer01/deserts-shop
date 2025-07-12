function Cart({ cart }) {
    return (
        <div className="cart">
            <h2>Your Cart ({cart.length})</h2>
            {cart.map((item, index) => (
                <div key={index}>
                    <strong>{item.name}</strong>
                    <div>@ ${item.price.toFixed(2)}</div>
                </div>
            ))}
            {cart.length > 0 && <button className={'btn-order'}>Confirm Order</button>}
        </div>
    );
}

export default Cart;
