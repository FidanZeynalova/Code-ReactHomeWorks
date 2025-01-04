import React, { useContext, useState } from 'react'
import { useFormik } from "formik"
import axios from 'axios'
import * as Yup from 'yup';
import { BooksContent } from '../../../context/BooksContext';
import { useNavigate } from 'react-router';

function AddBook() {
  let { books, setBooks } = useContext(BooksContent)
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      author: '',
      price: '',
      pagesCount: '',
      publishedYear: '',
      genre: '',
      language: '',
      image: ''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, 'Title must be at least 3 characters')
        .max(50, 'Title must be 50 characters or less')
        .required('Title is required'),
      description: Yup.string()
        .min(20, 'Description must be at least 20 characters')
        .max(50, 'Description must be 50 characters or less')
        .required('Description is required'),
      author: Yup.string()
        .min(3, 'Author must be at least 3 characters')
        .max(15, 'Author must be 15 characters or less')
        .required('Author is required'),
      price: Yup.number()
        .positive('Price must be positive')
        .integer('Price must be an integer')
        .min(3, 'Price must be at least 3')
        .max(100, 'Price must be 100 or less')
        .required('Price is required'),
      pagesCount: Yup.number()
        .positive('Pages count must be positive')
        .integer('Pages count must be an integer')
        .required('Pages count is required'),
      publishedYear: Yup.number()
        .required('Published year is required'),
      genre: Yup.string()
        .min(3, 'Author must be at least 3 characters')
        .max(15, 'Author must be 15 characters or less')
        .required('Author is required'),
      language: Yup.string()
        .min(3, 'Language must be at least 3 characters')
        .max(20, 'Language must be 20 characters or less')
        .required('Language is required'),
      image: Yup.string()
        .url('Invalid URL format')
        .required('Image URL is required'),
    }),
    onSubmit: values => {
      axios.post("http://localhost:4000/books", values)
        .then(() => {
          setBooks([...books])
        })
      navigate("/admin/books")

    }


  })
  return (
    <div className='admin-addBook'>
      <h1>Add Book</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="input">
          <label htmlFor="title"></label>
          <input type="text" placeholder='New Book Title'
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title} />
          {formik.touched.title && formik.errors.title && (
            <div className="error" style={{ color: "red" }}>{formik.errors.title}</div>
          )}
        </div>
        <div className="input">
          <label htmlFor="description"></label>
          <input type="text" placeholder='New Book Description' name='description' onChange={formik.handleChange}
            value={formik.values.description} />
          {formik.touched.description && formik.errors.description && (
            <div className="error" style={{ color: "red" }}>{formik.errors.description}</div>
          )}
        </div>
        <div className="input">
          <label htmlFor="author"></label>
          <input type="text" placeholder='New Book Author' name='author' onChange={formik.handleChange}
            value={formik.values.author} />
          {formik.touched.author && formik.errors.author && (
            <div className="error" style={{ color: "red" }}>{formik.errors.author}</div>
          )}
        </div>
        <div className="input">
          <label htmlFor="price"></label>
          <input type="number" placeholder='New Book Price' name='price' onChange={formik.handleChange}
            value={formik.values.price} />
          {formik.touched.price && formik.errors.price && (
            <div className="error" style={{ color: "red" }}>{formik.errors.price}</div>
          )}
        </div>
        <div className="input">
          <label htmlFor="pagesCount"></label>
          <input type="number" placeholder='New Book Pages Count' name='pagesCount' onChange={formik.handleChange}
            value={formik.values.pagesCount} />
          {formik.touched.pagesCount && formik.errors.pagesCount && (
            <div className="error" style={{ color: "red" }}>{formik.errors.pagesCount}</div>
          )}
        </div>
        <div className="input">
          <label htmlFor="publishedYear"></label>
          <input type="number" placeholder='New Book Published Year' name='publishedYear' onChange={formik.handleChange}
            value={formik.values.publishedYear} />
          {formik.touched.publishedYear && formik.errors.publishedYear && (
            <div className="error" style={{ color: "red" }}>{formik.errors.publishedYear}</div>
          )}
        </div>
        <div className="input">
          <label htmlFor="genre"></label>
          <input type="text" placeholder='New Book Genre' name='genre' onChange={formik.handleChange}
            value={formik.values.genre} />
          {formik.touched.genre && formik.errors.genre && (
            <div className="error" style={{ color: "red" }}>{formik.errors.genre}</div>
          )}
        </div>
        <div className="input">
          <label htmlFor="language"></label>
          <input type="text" placeholder='New Book Language' name='language' onChange={formik.handleChange}
            value={formik.values.language} />
          {formik.touched.language && formik.errors.language && (
            <div className="error" style={{ color: "red" }}>{formik.errors.language}</div>
          )}
        </div>
        <div className="input">
          <label htmlFor="image"></label>
          <input type="text" placeholder='New Book Image' name='image' onChange={formik.handleChange}
            value={formik.values.image} />
          {formik.touched.image && formik.errors.image && (
            <div className="error" style={{ color: "red" }}>{formik.errors.image}</div>
          )}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddBook
