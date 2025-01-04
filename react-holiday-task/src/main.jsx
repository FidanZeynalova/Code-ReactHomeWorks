import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FlowersContextProvider from './context/FlowersContext.jsx'
import BasketContextProvider from './context/BasketContext.jsx'
import FavoritesFlowersProvider from './context/FavoritesFlowers.jsx'

createRoot(document.getElementById('root')).render(
  <BasketContextProvider>
  <FlowersContextProvider>
    <FavoritesFlowersProvider>
      <App />
    </FavoritesFlowersProvider>
  </FlowersContextProvider>
</BasketContextProvider>
)
