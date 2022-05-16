import React, { useCallback, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './styles.css'
const NewBlogPost = (props) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [brand, setBrand] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [price, setPrice] = useState('')
  const newProduct = {
    name: '',
    category: '',
    description: '',
    brand: '',
    imageUrl: '',
    price: ''
  }

  const postNewProduct = async () => {
    const response = await fetch('http://localhost:5001/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      const body = await response.json()
      console.log(body)
    }
  }

  const setNewObjectValue = () => {
    newProduct.name = name
    newProduct.category = category
    newProduct.description = description
    newProduct.brand = brand
    newProduct.imageUrl = imageUrl
    newProduct.price = price
    console.log(newProduct)
    postNewProduct()
  }

  // const [text, setText] = useState('')
  // const handleChange = useCallback((value) => {
  //   setText(value)
  // })
  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Brand"
            onChange={(e) => {
              setBrand(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Price"
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>imageUrl</Form.Label>
          <Form.Control
            size="lg"
            placeholder="imageUrl"
            onChange={(e) => {
              setImageUrl(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            size="lg"
            as="select"
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option>Thriller</option>
            <option>Horror</option>
            <option>Comedy</option>
            <option>Action</option>
            <option>Adventure</option>
          </Form.Control>
        </Form.Group>
        {/* <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
          <ReactQuill
            value={text}
            onChange={handleChange}
            className="new-blog-content"
          /> */}
        {/* </Form.Group> */}
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button
            type="reset"
            size="lg"
            variant="outline-dark"
            onClick={() => Form.reset()}
          >
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: '1em'
            }}
            onClick={(e) => {
              e.preventDefault()
              setNewObjectValue(e)
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default NewBlogPost
