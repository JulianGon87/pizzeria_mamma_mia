import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container mt-5 text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-4">¡Ups! Página no encontrada</h2>
            <p className="fs-5 text-muted mb-4">Parece que la pizza que buscas se ha quemado en el horno o la dirección es incorrecta.</p>
            <Link to="/" className="btn btn-dark btn-lg rounded-pill px-4">Volver al Inicio</Link>
        </div>
    );
};

export default NotFound;
