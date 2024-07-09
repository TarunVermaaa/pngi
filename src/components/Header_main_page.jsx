import React from 'react';
import './Header_main_page.css';
import logo from "../images/logo_fromPPT.png"

const Header_main_page = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="Cyber Security Logo" />
            </div>
            <div className="text">
                <div className="badge">SECURE AND GUARANTEED</div>
                <h2>We Provide The Best Cyber Security</h2>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="buttons">
                    <a href="#">Get Start Now</a>
                    <a href="#">Get A Free Quote</a>
                </div>
            </div>
        </div>
    );
}

export default Header_main_page;


// import './Header_main_page.css';
// import logo from "../images/logo_fromPPT.png"

// export default function Header_main_page(params) {
//     return (
//         <div>
//             <header>
//                 <h1>PNGI</h1>
//                 <nav>
//                     <a href="#">Home</a>
//                     <a href="#">Events</a>
//                     <a href="#">Contact</a>
//                     <a href="#">Services</a>
//                     <a href="#">About Us</a>
//                 </nav>
//             </header>
//             <section className="hero">
//                 {/* <div className="hero-content">
//                     <h2>Professional Network group of India</h2>
//                     <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
//                     <div className="buttons">
//                         <a href="#">Get Start Now</a>
//                         <a href="#">Get A Free Quote</a>
//                     </div>
//                 </div> */}
//                 <div className="container">
//                     <div className="text">
//                         <h2>Professional Network group of India</h2>
//                     </div>
//                     <div className="image">
//                         <img src={logo} alt="Description of image" />
//                     </div>
//                 </div>
//             </section>
//         </div>

//     )
// };



// //
// {/* <style>
//                 body {
//                     margin: 0;
//                 font-family: Arial, sans-serif;
//                 background-color: #0a0a0a;
//                 color: #ffffff;
//         }
//                 header {
//                     display: flex;
//                 justify-content: space-between;
//                 align-items: center;
//                 padding: 20px 40px;
//                 background-color: #0a0a0a;
//         }
//                 header h1 {
//                     font - size: 24px;
//                 margin: 0;
//         }
//                 nav a {
//                     color: #ffffff;
//                 text-decoration: none;
//                 margin: 0 10px;
//         }
//                 .hero {
//                     text - align: center;
//                 padding: 100px 20px;
//                 background-image: url('background-image.jpg');
//                 background-size: cover;
//                 background-position: center;
//                 position: relative;
//         }
//                 .hero::before {
//                     content: '';
//                 position: absolute;
//                 top: 0;
//                 left: 0;
//                 width: 100%;
//                 height: 100%;
//                 background-color: rgba(0, 0, 0, 0.6);
//                 z-index: 1;
//         }
//                 .hero-content {
//                     position: relative;
//                 z-index: 2;
//         }
//                 .hero h2 {
//                     font - size: 48px;
//                 margin: 0;
//         }
//                 .hero p {
//                     font - size: 18px;
//                 max-width: 600px;
//                 margin: 20px auto;
//         }
//                 .buttons {
//                     margin - top: 20px;
//         }
//                 .buttons a {
//                     background - color: #6060ff;
//                 color: #ffffff;
//                 text-decoration: none;
//                 padding: 10px 20px;
//                 border-radius: 5px;
//                 margin: 0 10px;
//                 transition: background-color 0.3s;
//         }
//                 .buttons a:hover {
//                     background - color: #4040ff;
//         }
//             </style> */}