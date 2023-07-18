import { useState } from "react"
import { useEffect } from "react";


export const Usebg = () => {
    const [bg, setBg] = useState("rgba(255, 255, 255)");

        let HandelTgoggle = () =>{

            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
             
            setBg(`rgb(${red},${green},${blue})`)
        }


    
  return {
    bg,
    HandelTgoggle
  }
}

