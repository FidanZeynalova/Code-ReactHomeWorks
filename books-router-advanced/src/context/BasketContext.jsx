import React, { createContext, useEffect, useState } from 'react'

export const BasketContext = createContext()

function BasketContextProvider({children}) {
    let localBasket = JSON.parse(localStorage.getItem("basket"))
    let [basketBooks,setBasketBooks] = useState(localBasket ? localBasket : [])

    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(basketBooks))
    },[basketBooks])
    const value = {
        basketBooks,
        setBasketBooks
    }

  return (
    <BasketContext.Provider value={value}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContextProvider
