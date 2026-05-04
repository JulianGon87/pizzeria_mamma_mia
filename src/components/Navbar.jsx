import { formatCurrency } from "../utils/formatCurrency";

const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">Pizzería Mamma Mia!</span>
                <div className="d-flex gap-2">
                    <button className="btn btn-outline-light btn-sm">🍕 Home</button>
                    {token ? (
                        <>
                            <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
                            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-outline-light btn-sm">🔐 Login</button>
                            <button className="btn btn-outline-light btn-sm">🔐 Register</button>
                        </>
                    )}
                    <button className="btn btn-outline-info btn-sm">🛒 Total: ${formatCurrency(total)}</button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;