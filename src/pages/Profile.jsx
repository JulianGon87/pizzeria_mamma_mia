import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const { logout } = useContext(UserContext);

    return (
        <div className="container mt-5 text-center" style={{ minHeight: "60vh" }}>
            <h2 className="mb-4 fw-bold text-dark">Mi Perfil</h2>
            <p className="fs-5 text-dark">Email: <strong>usuario@ejemplo.com</strong></p>
            <button className="btn btn-danger btn-lg mt-3" onClick={logout}>Cerrar Sesión</button>
        </div>
    );
};

export default Profile;
