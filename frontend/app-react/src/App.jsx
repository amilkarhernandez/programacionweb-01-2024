import Button from 'react-bootstrap/Button';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Headers } from './components/Headers';
import { ListProducts } from './components/List-Products';
import { Formulario } from './components/Formulario';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])
  const [flag, setFlag] = useState(false)

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response)
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Headers title={"App Products"} flag={flag} setFlag={setFlag}/>
      {flag ? <Formulario /> : <ListProducts listProducts={products} />}
    </>
  )
}

export default App
