import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router";
import { BooksContent } from '../../../context/BooksContext';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { BasketContext } from '../../../context/basketContext';


function Books() {
  let { books } = useContext(BooksContent)
  let { favBooks, setFavBooks } = useContext(FavoritesContext)
  let { basketBooks, setBasketBooks } = useContext(BasketContext)


  function handleBasket(book) {
    let findBasket = basketBooks.find(basket => basket.id == book.id)
    if (findBasket) {
      findBasket.count++
      setBasketBooks([...basketBooks])
    } else {
      setBasketBooks([...basketBooks, { ...book, count: 1 }])
    }
  }

  function handleFavorite(book) {
    let findFav = favBooks.find(fav => fav.id == book.id)
    if (findFav) {
      alert("Bu artiq favorite movcuddur")
    } else {
      setFavBooks([...favBooks, book])
    }
  }

  return (
    <div className='user-books-container'>
      <div className="user-books">
        {
          books.map(book => (
            <Card style={{ width: '18rem' }} key={book.id}>
              <Card.Img variant="top" src={book.image} style={{ height: "350px", width: "100%", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description.slice(0, 50)}...</Card.Text>
                <p>{book.price}$</p>
                <p><b>{book.author}</b></p>
                <Button><Link to={`${book.id}`}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" style={{ color: "white" }}></path></svg></Link>
                </Button>
                <Button variant="success" className='mx-2' onClick={() => handleFavorite(book)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 20.703.343.667a.748.748 0 0 1-.686 0l-.003-.002-.007-.003-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013-.007.003-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4Z" style={{ color: "black" }}></path></svg></Button>
                <Button variant="warning" onClick={() => handleBasket(book)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m17.21 9-4.38-6.56a.993.993 0 0 0-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" style={{ color: "black" }}></path></svg></Button>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Books
