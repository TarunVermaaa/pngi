import './Navbar.css';
import logo from "../images/logo_fromPPT.png"

export default function Navbar(params) {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <img src={logo} alt="Logo" id='logo_navbar' />
                <span id='span_text'><a class="navbar-brand" href="#">PNGI</a></span>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav-links">
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Examples</a></li>
                        <li><a href="#">Free resources</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                    <div class="download">
                        <a href="#">Download Free</a>
                    </div>
                </div>
            </nav>

            <header>
                <nav class="navbar">
                    <div class="logo">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <img src={logo} alt="Logo" id='logo_navbar' />
                            <a class="navbar-brand" href="#">PNGI</a>
                        </nav>
                    </div>
                    <ul class="nav-links">
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Examples</a></li>
                        <li><a href="#">Free resources</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                    <div class="download">
                        <a href="#">Download Free</a>
                    </div>
                </nav>
            </header>
        </>
    )
};
