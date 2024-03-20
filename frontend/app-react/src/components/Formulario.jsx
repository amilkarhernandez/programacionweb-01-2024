import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const Formulario = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const setFormulario = async () => {
    const data = {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category
    }

    const response = await axios.post("https://fakestoreapi.com/products", data);
    console.log(response)
  }

  return (
    <div className='container'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>title</Form.Label>
          <Form.Control type="email" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>price</Form.Label>
          <Form.Control type="email" placeholder="price" onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>description</Form.Label>
          <Form.Control type="email" placeholder="description" onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>image</Form.Label>
          <Form.Control type="email" placeholder="imagen" onChange={(e) => setImage(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>category</Form.Label>
          <Form.Control type="email" placeholder="category" onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={setFormulario}>Primary</Button>{' '}
      </Form>


    </div>
  )
}
