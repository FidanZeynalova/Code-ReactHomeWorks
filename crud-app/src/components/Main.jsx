import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
function Main() {

  let [products, setProducts] = useState([])
  let [editId, setEditId] = useState("")
  let [display, setDisplay] = useState("none")
  let [name, setName] = useState("")
  let [brand, setBrand] = useState("")
  let [price, setPrice] = useState("")
  let [category, setCategory] = useState("")
  let [editName, setEditName] = useState("")
  let [editBrand, setEditBrand] = useState("")
  let [editPrice, setEditPrice] = useState("")
  let [editCategory, setEditCategory] = useState("")
  let [detailDisplay,setDetailDisplay] = useState("none")
  let [detailName, setDetailName] = useState("")
  let [detailBrand, setDetailBrand] = useState("")
  let [detailPrice, setDetailPrice] = useState("")
  let [detailCategory, setDetailCategory] = useState("")

  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data)
      })
  }, [])

  //  Delete
  async function handleDelete(id) {
    await axios.delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        let filterProduct = products.filter(data => data.id !== id)
        setProducts(filterProduct)
      })
  }

  // Edit(Update)(edit klik olunanda datalarin formda gorunmesidir)
  function handleEdit(id) {
    setEditId(id)
    let editProduct = products.find(data => data.id == id)
    setEditName(editProduct.name)
    setEditCategory(editProduct.category)
    setEditPrice(editProduct.price)
    setEditBrand(editProduct.brand)

    if (display == "none") {
      setDisplay("block")
    }
  }

  // Edit form-un submit olunmasi
  function handleEditSubmit(e) {
    e.preventDefault()
    let updateProduct = {
      name: editName,
      brand: editBrand,
      category: editCategory,
      price: editPrice
    }
    axios.put(`http://localhost:4000/products/${editId}`, updateProduct)
      .then((res) => {
        let updateProduct = products.map(product =>
          product.id == editId ? res.data : product
        )
        setProducts(updateProduct)
        setDisplay("none");
      })
  }

  // Add formu
  function handleAddProduct(e) {
    e.preventDefault()
    if(name.trim() == "" || brand.trim() == "" || category.trim() == "" || price.trim() == ""){
      alert("Bosluglari duzgun doldurun")
    }
    let newProduct = {
      name: name,
      brand: brand,
      category: category,
      price: price
    }
    axios.post("http://localhost:4000/products", newProduct)
      .then((res) => {
        setProducts([...products, res.data])
        setBrand("")
        setCategory("")
        setName("")
        setPrice("")
      })
  }

  // Detail formu
  function handleProductDetail(id) {
    let detailProduct = products.find(product => product.id == id)
    setDetailName(detailProduct.name)
    setDetailPrice(detailProduct.price)
    setDetailCategory(detailProduct.category)
    setDetailBrand(detailProduct.brand)

    
    if (detailDisplay == "none") {
      setDetailDisplay("block")
    }
    
  }

  // display none --> block
  function handleDisplay() {
    if (display == "block") {
      setDisplay("none")
    }
    if (detailDisplay == "block") {
      setDetailDisplay("none")
    }
  }


  return (
    <div>
      <Form style={{ width: "90%", margin: "0px auto" }} onSubmit={(e) => handleAddProduct(e)}>
        <h1 style={{ margin: "20px auto", fontSize: "35px", fontWeight: "bold" }}>Add Form</h1>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="New Name..." value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="New Brand..." value={brand} onChange={(e) => setBrand(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="New Price..." value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="New Category..." value={category} onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>
        <Button variant="success" type='submit'>Add New Product</Button>
      </Form>
      <div className='table-container'>
        <h1 style={{ display: "flex", justifyContent: "center", margin: "20px auto", fontSize: "35px", fontWeight: "bold" }}>Product Table</h1>
        <Table striped bordered hover className='mt-2' style={{ width: "90%", margin: "0px auto" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price($)</th>
              <th>Category</th>
              <th>Detail</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}$</td>
                <td>{product.category}</td>
                <td><Button variant="outline-primary" onClick={(id) => handleProductDetail(product.id)}>Detail</Button></td>
                <td><Button variant="outline-success" onClick={(id) => handleEdit(product.id)}>Edit</Button></td>
                <td><Button variant="danger" onClick={(id) => handleDelete(product.id)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="modal show" style={{ display: display, position: 'fixed', top: "20%" }} >
        <Modal.Dialog>
          <Modal.Header closeButton onClick={() => handleDisplay()}>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={(e) => handleEditSubmit(e)}>
              <Form.Group className="mb-3">
                <Form.Control type="text" required placeholder="Edit Name..." value={editName} onChange={(e) => setEditName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" required placeholder="Edit Brand..." value={editBrand} onChange={(e) => setEditBrand(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="number" required placeholder="Edit Price..." value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" required placeholder="Edit Category..." value={editCategory} onChange={(e) => setEditCategory(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleDisplay()}>Close</Button>
            <Button variant="primary" onClick={(e) => handleEditSubmit(e)}>Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>

      <div className="modal show" style={{ display: detailDisplay, position: 'fixed', top: "20%" }} >
        <Modal.Dialog>
          <Modal.Header closeButton onClick={() => handleDisplay()}>
            <Modal.Title>Detail Product</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Card style={{ width: '18rem', margin: "0px auto",textAlign:"center"}}>
      <Card.Body>
        <Card.Title><h1>{detailName}</h1></Card.Title>
        <Card.Text>
            <p>{detailBrand}</p>
            <p>{detailPrice}</p>
            <p>{detailCategory}</p>
        </Card.Text>
      </Card.Body>
    </Card>
          </Modal.Body>
        </Modal.Dialog>
      </div>
      <div className="myOverlay" style={{ display: display }}></div>
      <div className="myOverlay" style={{ display: detailDisplay }}></div>
    </div>
  )
}

export default Main
