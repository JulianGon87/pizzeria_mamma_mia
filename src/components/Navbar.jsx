import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const { total } = useContext(CartContext);
    const { token, logout } = useContext(UserContext);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand text-decoration-none">Pizzería Mamma Mia!</Link>
                <div className="d-flex gap-2">
                    <Link to="/" className="btn btn-outline-light btn-sm text-decoration-none">🍕 Home</Link>
                    {token ? (
                        <>
                            <Link to="/profile" className="btn btn-outline-light btn-sm text-decoration-none">🔓 Profile</Link>
                            <button className="btn btn-outline-light btn-sm" onClick={logout}>🔒 Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline-light btn-sm text-decoration-none">🔐 Login</Link>
                            <Link to="/register" className="btn btn-outline-light btn-sm text-decoration-none">🔐 Register</Link>
                        </>
                    )}
                    <Link to="/cart" className="btn btn-outline-info btn-sm text-decoration-none">🛒 Total: ${formatCurrency(total)}</Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;