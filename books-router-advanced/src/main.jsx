import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BooksContextProvider from './context/BooksContext.jsx';
import FavoritesContextProvider from './context/FavoritesContext.jsx';
import BasketContextProvider from './context/basketContext.jsx';


createRoot(document.getElementById('root')).render(
   <BasketContextProvider>
     <FavoritesContextProvider>
        <BooksContextProvider>
            <App />
        </BooksContextProvider>
    </FavoritesContextProvider>
   </BasketContextProvider>
)
