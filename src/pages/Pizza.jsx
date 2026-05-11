import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const getPizza = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                if (!response.ok) {
                    throw new Error("Pizza no encontrada");
                }
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error("Error al obtener la pizza:", error);
                setPizza(false); // Para manejar el estado de error
            }
        };

        getPizza();
    }, [id]);

    if (pizza === null) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
                <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (pizza === false) {
        return (
            <div className="container my-5 text-center" style={{ minHeight: "60vh" }}>
                <h2 className="text-danger">Error: Pizza no encontrada</h2>
            </div>
        );
    }

    return (
        <div className="container my-5 d-flex justify-content-center">
            <div className="card mb-3" style={{ maxWidth: "800px" }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={pizza.img} className="img-fluid rounded-start h-100 object-fit-cover" alt={pizza.name} />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title text-capitalize fw-bold">Pizza {pizza.name}</h3>
                            <hr />
                            <p className="card-text text-muted">{pizza.desc}</p>
                            <p className="fw-bold mb-1">Ingredientes:</p>
                            <ul className="list-unstyled text-capitalize small">
                                {pizza.ingredients.map((ingredient, index) => (
                                    <li key={index}>🍕 {ingredient}</li>
                                ))}
                            </ul>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="mb-0 fw-bold">Precio: ${formatCurrency(pizza.price)}</h4>
                                <button className="btn btn-dark" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
