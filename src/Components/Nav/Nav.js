import React from "react";
import "./Nav.scss";

export default function Nav() {
   return (
      <div className="nav-section">
         <div className="container">
            <div className="nav-wrapper">
               <div className="brand">
                  <img alt="tasty-icon"></img>
                  <p className="tasty-text">Tasty Brewers</p>
               </div>
               <div className="cart-nav-wrapper">
                  <div className="nav-menu">
                    <a className= 'nav-links' href="/">Home</a>
                    <a className= 'nav-links' href="/">About</a>
                    <a className= 'nav-links' href="/">Shop</a>
                    <a className= 'nav-links' href="/">Donate</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
