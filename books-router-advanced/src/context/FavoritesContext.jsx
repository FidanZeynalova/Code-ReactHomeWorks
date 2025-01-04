import React, { createContext, useEffect, useState } from 'react'
export const FavoritesContext = createContext()

function FavoritesContextProvider({ children }) {
    let localFavs = JSON.parse(localStorage.getItem("favorites"))
    let [favBooks, setFavBooks] = useState(localFavs ? localFavs : [])
    

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favBooks))
    }, [favBooks])

    const value = {
        favBooks,
        setFavBooks 
    }
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider
