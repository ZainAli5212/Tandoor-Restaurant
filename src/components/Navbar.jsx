import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="filler"></div>
            <nav>
                <div className="logo">
                    <img width="200" height="120" src="https://tandoorirestaurants.pk/wp-content/uploads/2024/02/cropped-TR.png" alt="Tandoori Restaurants" decoding="async" />            </div>

                <div className="links">
                    <ul>

                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/order">Order Now</a></li>
                        <li><a href="/catering">Tandoori Catering</a></li>
                        <li><a href="/locations">Locations</a></li>
                        <li><a href="/franchising">Franchising</a></li>
                        <li><a href="/gallery">Gallery</a></li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar