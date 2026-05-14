import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const { logout, email, getProfile } = useContext(UserContext);

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className="container mt-5 text-center" style={{ minHeight: "60vh" }}>
            <h2 className="mb-4 fw-bold text-dark">Mi Perfil</h2>
            <p className="fs-5 text-dark">Email: <strong>{email}</strong></p>
            <button className="btn btn-danger btn-lg mt-3" onClick={logout}>Cerrar Sesión</button>
        </div>
    );
};



export default Profile;
