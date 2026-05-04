import { formatCurrency } from "../utils/formatCurrency";

const CardPizza = ({ name, price, ingredients, img }) => (
    <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body">
            <h5 className="card-title fw-bold">Pizza {name}</h5>
            <hr />
            <p className="text-center text-muted mb-1">Ingredientes:</p>
            <p className="text-center small">🍕 {ingredients.join(", ")}</p>
            <hr />
            <h4 className="text-center fw-bold">Precio: ${formatCurrency(price)}</h4>
            <div className="d-flex justify-content-around mt-3">
                <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
                <button className="btn btn-dark btn-sm">Añadir 🛒</button>
            </div>
        </div>
    </div>
);

export default CardPizza;
