import React from "react";
import { Button } from "@chakra-ui/core";
import "./Hero.scss";


export default function Hero() {
   return (
      <div className="hero-section">
         <div className="container">
            <div className="hero-wrapper">
               <h1 className="hero-heading">Brewing Coffee Since 1959.</h1>
               <p className="hero-paragraph">
                  We have shops located in all 50 states so you can get your
                  bean and drink it too!
               </p>
               {/* <button>the button will go here</button> */}
               
            </div>
         </div>
      </div>
   );
}
