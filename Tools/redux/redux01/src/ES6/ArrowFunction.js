import React from "react"
import { useState } from "react"

const ArrowFunction= () =>{

    const arrowFunction = (price) => {
        console.log('price = '+price)
    }
    
    arrowFunction(10)

    const A = (B) =>{
        return 10
    }
    console.log(A(10))

}


export default ArrowFunction