import React, { useContext, useEffect } from 'react'
import { FlowersContext } from '../../../context/FlowersContext'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

function Add() {
  let { flowers, setFlowers } = useContext(FlowersContext)
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Title must be at least 3 characters')
        .max(15, 'Title must be 50 characters or less')
        .required('Title is required'),
      description: Yup.string()
        .min(10, 'Description must be at least 20 characters')
        .max(20, 'Description must be 50 characters or less')
        .required('Description is required'),
      price: Yup.number()
        .positive('Price must be positive')
        .integer('Price must be an integer')
        .min(3, 'Price must be at least 3')
        .max(100, 'Price must be 100 or less')
        .required('Price is required'),
      image: Yup.string()
        .url('Invalid URL format')
        .required('Image URL is required'),
    }),
    onSubmit: values => {
      axios.post("http://localhost:4000/flowers", values)
        .then((res) => {
          setFlowers([...flowers, res.data])
          Swal.fire({
            icon: "success",
            title: `${res.data.name} has been successfully added`,
            showConfirmButton: false,
            timer: 1500
          });
        })
        
      navigate("/admin/dashboard")
    }

  })
  return (
    <div className='Admin-add'>
      <div className="container">
        <h1>Add New Flower</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder='New Flower ...' name="name"
                onChange={formik.handleChange}
                value={formik.values.name} />
              {formik.touched.name && formik.errors.name && (
                <div className="error" style={{ color: "red" }}>{formik.errors.name}</div>
              )}
            </div>
            <div className="input">
              <input type="text" placeholder='New Flower Description ...' name="description"
                onChange={formik.handleChange}
                value={formik.values.description} />
              {formik.touched.description && formik.errors.description && (
                <div className="error" style={{ color: "red" }}>{formik.errors.description}</div>
              )}
            </div>
            <div className="input">
              <input type="number" placeholder='New Flower Price ...' name="price"
                onChange={formik.handleChange}
                value={formik.values.price} />
              {formik.touched.price && formik.errors.price && (
                <div className="error" style={{ color: "red" }}>{formik.errors.price}</div>
              )}
            </div>
            <div className="input">
              <input type="text" placeholder='New Flower image ...' name="image"
                onChange={formik.handleChange}
                value={formik.values.image} />
              {formik.touched.image && formik.errors.image && (
                <div className="error" style={{ color: "red" }}>{formik.errors.image}</div>
              )}
            </div>
          </div>
          <button type="submit">Add Flowers</button>
        </form>
      </div>
    </div>
  )
}

export default Add
