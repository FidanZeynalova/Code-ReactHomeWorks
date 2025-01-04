import React, { createContext, useEffect, useState } from 'react'
import { FlowersContext } from './FlowersContext'
export const FavoritesFlowers = createContext()

function FavoritesFlowersProvider({ children }) {
  let localFav = JSON.parse(localStorage.getItem("favorites"))
  let [favoritesFlowers, setFavoritesFlowers] = useState(localFav ? localFav : [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesFlowers));
  }, [favoritesFlowers]);

  const value = {
    favoritesFlowers,
    setFavoritesFlowers
  }
  return (
    <FavoritesFlowers.Provider value={value}>
      {children}
    </FavoritesFlowers.Provider>
  )
}

export default FavoritesFlowersProvider