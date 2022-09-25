import logo from './logo.svg';
import './App.css';

const prductsArr = [
  {name: 'Laptop', price: 20000},
  {name: 'Desktop', price: 30000}
] 


function App() {
  return (
    <div className="App">
      {
        prductsArr.map(product => <Product name={product.name} price={product.price}></Product>)
      
      }
      
    </div>
  );
}

export default App;

function Product(props){
  console.log(props)
  return(
    <div className='productStyle'>
      <h1>Product Name: {props.name} </h1>
      <h3>Product Price: {props.price}</h3>
    </div>
  )
}