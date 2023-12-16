import logo from './logo.svg';
import './App.css';
import PizzaSelection from './Components/PizzaSelection';
import PizzaOrder from './Components/PizzaOrder';
import CustomerDetails from './Components/CustomerDetails';
import PizzaForm from './Components/PizzaForm';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='m-6'>
      <div className='flex justify-between'>
        <PizzaForm/>
        <PizzaOrder/>
      </div>
    {/* <div className='flex justify-between'>
    <PizzaSelection/>
    <PizzaOrder/>
    </div>
    <CustomerDetails/> */}
    <ToastContainer/>
    </div>
    
  );
}

export default App;
