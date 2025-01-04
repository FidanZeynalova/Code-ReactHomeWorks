import axios from 'axios'
import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { BooksContent } from '../../../context/BooksContext'


function AdminBooks() {
 let { books ,setBooks} = useContext(BooksContent)
  // Delete
  async function handleDelete(id) {
   await axios.delete(`http://localhost:4000/books/${id}`)
    .then(()=>{
      let filterBooks = books.filter((book) => book.id !== id)
      setBooks(filterBooks)
      
    })
  }

  return (
    <div className='admin-books'>
      <button id='addButton'><Link to ="/admin/add" style={{color:"white",textDecoration:"none"}}>Add Books</Link></button>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Info</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        {
          books.map((book) => (
            <tr key={book.id}>
              <td><img src={book.image} alt={book.title} style={{ height: "150px", width: "100px", objectFit: "cover" }} /></td>
              <td>{book.title},({book.author})</td>
              <td>{book.price}$</td>
              <td><button ><Link to = {`${book.id}`} style={{ textDecoration: "none", color: "black"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg></Link></button></td>

              <td><button><Link to ={ `/admin/edit/${book.id}`} style={{ textDecoration: "none", color: "black"}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></Link></button></td>

              <td><button onClick={(id)=>handleDelete(book.id)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></button></td>
            </tr>
          ))
        }

      </table>
    </div>
  )
}

export default AdminBooks
