const Header = () => (
    <header className="text-white text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '30vh', backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${import.meta.env.BASE_URL}Header.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <hr className="w-75 border-white mx-auto" />
    </header>
);

export default Header;