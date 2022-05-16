import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = (props) => {
  /*   const { title, cover, author, _id } = props; */
  return (
    <Link to={`/blog/${props.id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={props.imageUrl} className="blog-cover" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <h2>{props.category}</h2>
          <h6>{props.description}</h6>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor> </BlogAuthor>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
