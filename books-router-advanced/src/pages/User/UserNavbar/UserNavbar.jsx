import React, { useContext } from 'react'
import { Link } from "react-router";
import { BooksContent } from '../../../context/BooksContext';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { BasketContext } from '../../../context/basketContext';

function UserNavbar() {
  let { books, setBooks,originalBooks } = useContext(BooksContent)
  let {favBooks} = useContext(FavoritesContext)
  let {basketBooks} = useContext(BasketContext)


  // Search
function handleSearch(value) {
  let searchValue = value.trim().toLowerCase()

  if (!searchValue) {
    setBooks(originalBooks)
    return
  }
  let filterData = originalBooks.filter(({title}) =>title.toLowerCase().startsWith(searchValue))
  setBooks(filterData)
}

// Sort
  function handleSort() {
    let sort = books.toSorted((a, b) => a.price - b.price)
    
    if (JSON.stringify(sort) != JSON.stringify(books)) {
      setBooks([...sort]);
    } else {
      setBooks([...originalBooks])
    }
  }
  return (
    <div className="user-navbar-container">
      <div className='user-navbar'>
        <div className="logo">
          <h1> <Link to="books" style={{ color: "black", textDecoration: "none" }}>🕮Books</Link></h1>
        </div>
        <div className="buttons">
          <input type="text" placeholder='Search Books...' onChange={(e)=>handleSearch(e.target.value)}/>
          <button onClick={() => handleSort()}>Sort</button>
          <button><Link to="basket" style={{ color: "black",textDecoration:"none" }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m17.21 9-4.38-6.56a.993.993 0 0 0-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" ></path></svg><span >  {basketBooks.length}</span></Link ></button>
          <button><Link to="favorites" style={{ color: "black",textDecoration:"none"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 20.703.343.667a.748.748 0 0 1-.686 0l-.003-.002-.007-.003-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013-.007.003-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4Z" ></path></svg>  <span>  {favBooks.length}</span></Link></button>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
