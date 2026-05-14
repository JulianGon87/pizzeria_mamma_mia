import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatCurrency } from "../utils/formatCurrency";

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const [message, setMessage] = useState("");

    const handleCheckout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    cart: cart,
                }),
            });
            if (response.ok) {
                setMessage("¡Compra realizada con éxito! 🍕");
            } else {
                setMessage("❌ Error al procesar la compra.");
            }
        } catch (error) {
            setMessage("❌ Error de red.");
        }
    };

    return (
        <div className="container my-5" style={{ maxWidth: "600px" }}>
            <h3 className="mb-4">Detalles del pedido:</h3>
            {message && (
                <div className={`alert ${message.includes("éxito") ? "alert-success" : "alert-danger"} mb-4`} role="alert">
                    {message}
                </div>
            )}
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
            <button className="btn btn-dark mt-3" disabled={!token || cart.length === 0} onClick={handleCheckout}>Pagar</button>
        </div>
    );
};


export default Cart;
