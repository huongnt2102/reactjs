import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ProductList from './ProductList/ProductList';
import Form from './Form/Form';
import UncontrolledComponent from './Form/UncontrolledComponent';
import Calculator from './Calculator/Calculator';
import FilterableProductTable from './ThinkingInReact/FilterableProductTable';

function App() {
  return (
    <div className='App'>
      {/* <Clock /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Calculator /> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
