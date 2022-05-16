import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogAuthor from '../blog-author/BlogAuthor'
import './styles.css'
const BlogItem = (props) => {
  /*   const { title, cover, author, _id } = props; */

  const deleteThisProduct = async () => {
    const response = await fetch(`http://localhost:5001/products/${props.id}`, {
      method: 'DELETE'
    })
    if (response.ok) {
      console.log('deleted successfully')
    }
  }

  return (
    <Card className="blog-card">
      <Link to={`/blog/${props.id}`} className="blog-link">
        <Button variant="outline-primary">LINK</Button>{' '}
      </Link>
      <Card.Img variant="top" src={props.imageUrl} className="blog-cover" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <h2>{props.category}</h2>
        <h6>{props.description}</h6>
      </Card.Body>
      <Button variant="outline-primary" onClick={() => deleteThisProduct()}>
        DELETE
      </Button>{' '}
      <Card.Footer>
        <BlogAuthor> </BlogAuthor>
      </Card.Footer>
    </Card>
  )
}

export default BlogItem
