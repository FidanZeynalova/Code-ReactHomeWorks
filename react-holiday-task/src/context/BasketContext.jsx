import React, { createContext, useEffect, useState } from 'react'
 export const BasketFlowers = createContext()

function BasketContextProvider({children}) {
    let localBasket = JSON.parse(localStorage.getItem("basket"))
    let [basketFlowers,setBasketFlowers] = useState(localBasket ? localBasket : [])

    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(basketFlowers))
    },[basketFlowers])

    const value = {
        basketFlowers,setBasketFlowers
    }
  return (
    <BasketFlowers.Provider value={value}>
      {children}
    </BasketFlowers.Provider>
  )
}

export default BasketContextProvider
