import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatCurrency } from "../utils/formatCurrency";

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
    const { token } = useContext(UserContext);

    return (
        <div className="container my-5" style={{ maxWidth: "600px" }}>
            <h3 className="mb-4">Detalles del pedido:</h3>
            <div className="list-group mb-4">
                {cart.map((item) => (
                    <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={item.img} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "15px", borderRadius: "5px" }} />
                            <h5 className="mb-0 text-capitalize">{item.name}</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <h6 className="mb-0 me-3 fw-bold">${formatCurrency(item.price)}</h6>
                            <button className="btn btn-outline-danger btn-sm" onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span className="mx-2 fw-bold">{item.count}</span>
                            <button className="btn btn-outline-primary btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-dark">Total: ${formatCurrency(total)}</h2>
            <button className="btn btn-dark mt-3" disabled={!token}>Pagar</button>
        </div>
    );
};

export default Cart;
