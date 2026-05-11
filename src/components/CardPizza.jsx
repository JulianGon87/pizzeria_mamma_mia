import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="card h-100">
            <img src={img} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title fw-bold">Pizza {name}</h5>
                <hr />
                <p className="text-center text-muted mb-1">Ingredientes:</p>
                <ul className="list-unstyled text-center small text-capitalize">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>🍕 {ingredient}</li>
                    ))}
                </ul>
                <hr />
                <h4 className="text-center fw-bold">Precio: ${formatCurrency(price)}</h4>
                <div className="d-flex justify-content-around mt-3">
                    <Link to={`/pizza/${id}`} className="btn btn-outline-dark btn-sm">Ver Más 👀</Link>
                    <button className="btn btn-dark btn-sm" onClick={() => addToCart({ id, name, price, img })}>Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;
