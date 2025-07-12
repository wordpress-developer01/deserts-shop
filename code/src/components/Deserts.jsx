import React from 'react';

const Deserts = ({ deserts, children, onAddToCart }) => {
    return (
        <div className="Deserts">
            <h2>Deserts list</h2>
            <ul className="ul-deserts">
                {deserts.map((d) => (
                    <li key={d.id} className="dessert-item">
                        <img src={d.img} alt={d.name} className="dessert-image" style={{ width: '200px', height: 'auto' }}/>
                        <button onClick={() => onAddToCart(d)} className={'btn-cart'}>Add to Cart</button>
                        <div>
                            <strong>{d.name}</strong> — ${d.price.toFixed(2)}
                            <p>{d.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {children}
        </div>
    );
};

export default Deserts;
