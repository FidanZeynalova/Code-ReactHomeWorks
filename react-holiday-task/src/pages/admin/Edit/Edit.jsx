import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FlowersContext } from '../../../context/FlowersContext';

function Edit() {
  let { flowers, setFlowers } = useContext(FlowersContext)
  let { id } = useParams(); 
  let navigate = useNavigate()

  const [flowerData, setFlowerData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/flowers/${id}`)
      .then((res) => {
        setFlowerData(res.data);
      })
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: flowerData.name,
      description: flowerData.description,
      price: flowerData.price,
      image: flowerData.image
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
      axios.put(`http://localhost:4000/flowers/${id}`, values)
        .then((res) => {
          let updatedFlowers = flowers.map(flower =>
            flower.id === id ? res.data : flower
          );
          setFlowers(updatedFlowers); 
          Swal.fire({
            icon: 'success',
            title: `${res.data.name} has been successfully updated!`,
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/admin/dashboard');
        });
    }

  })
  return (
    <div className='Edit-add'>
    <div className="container">
      <h1>Edit Flower</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder='Edit Flower ...' name="name"
              onChange={formik.handleChange}
              value={formik.values.name} />
            {formik.touched.name && formik.errors.name && (
              <div className="error" style={{ color: "red" }}>{formik.errors.name}</div>
            )}
          </div>
          <div className="input">
            <input type="text" placeholder='Edit Flower Description ...' name="description"
              onChange={formik.handleChange}
              value={formik.values.description} />
            {formik.touched.description && formik.errors.description && (
              <div className="error" style={{ color: "red" }}>{formik.errors.description}</div>
            )}
          </div>
          <div className="input">
            <input type="number" placeholder='Edit Flower Price ...' name="price"
              onChange={formik.handleChange}
              value={formik.values.price} />
            {formik.touched.price && formik.errors.price && (
              <div className="error" style={{ color: "red" }}>{formik.errors.price}</div>
            )}
          </div>
          <div className="input">
            <input type="text" placeholder='Edit Flower image ...' name="image"
              onChange={formik.handleChange}
              value={formik.values.image} />
            {formik.touched.image && formik.errors.image && (
              <div className="error" style={{ color: "red" }}>{formik.errors.image}</div>
            )}
          </div>
        </div>
        <div className="buttons">
        <button type="submit">Submit Flowers</button>
        <button><Link to={"/admin/dashboard"} style={{color:"black",textDecoration:"none"}}>Go Back</Link></button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Edit
