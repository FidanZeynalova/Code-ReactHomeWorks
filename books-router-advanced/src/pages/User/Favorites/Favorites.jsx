import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { Link } from 'react-router';
import { BasketContext } from '../../../context/basketContext';
function Favorites() {
  let { favBooks, setFavBooks } = useContext(FavoritesContext)
   let {basketBooks,setBasketBooks} = useContext(BasketContext)

  function handleDelete(id) {
    let filtered = favBooks.filter(favBook => favBook.id !== id)
    setFavBooks(filtered)
  }

  function handleBasket(favBook) {
    let findBasket = basketBooks.find(basket => basket.id == favBook.id)
    if (findBasket) {
      findBasket.count ++
      setBasketBooks([...basketBooks])
    }else{
      setBasketBooks([...basketBooks,{...favBook,count:1}])
    }
   }


  return (
    <div className="user-books-container">
      <div className="user-books">
        {
          favBooks.length == 0 ? (
            <div className="fav-head">
              <h1>Favorites is empty!😓</h1>
              <button><Link to="/books" className='link' style={{ textDecoration: "none" }}>Go Shopping!</Link></button>
            </div>
          ) : (
            favBooks.map(favBook => (
              <Card className='mt-3' style={{ width: '18rem' }} key={favBook.id}>
                <Card.Img variant="top" src={favBook.image} style={{ height: "350px", width: "100%", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{favBook.title}</Card.Title>
                  <Card.Text>{favBook.description.slice(0, 50)}...</Card.Text>
                  <p>{favBook.price}$</p>
                  <p><b>{favBook.author}</b></p>
                  <Button><Link to={`/books/${favBook.id}`}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" style={{ color: "white" }}></path></svg></Link>
                  </Button>
                  <Button variant="danger" className='m-2' onClick={(id) => handleDelete(favBook.id)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M51.9 76.6l25 25c-18.1 20.3-29 47.3-29 77.6 0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2c20.6-18.9 39.9-36.6 57.5-53.3l92.2 92 24-24-383.8-383-24.2 24.1zM464 179.1C464 114.2 414.1 64 349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64c-8.4 0-16.5.9-24.3 2.5l253.7 253.1C437.3 270.9 464 228 464 179.1z"></path></svg></Button>
                  <Button variant="warning" onClick={()=>handleBasket(favBook)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m17.21 9-4.38-6.56a.993.993 0 0 0-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" style={{ color: "black" }}></path></svg></Button>
                </Card.Body>
              </Card>
            ))
          )
        }
      </div>
    </div>
  )
}

export default Favorites
