import {useState, useEffect} from 'react';
import './App.css';

//dolares, euros y bitcoin
//CLASE02
function App() {
  const [dolar, setUDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);
  
 

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setUDolar((total * tipo) );
    setEuro((total * tipo) * 0.852158);
    setBitcoin((total * tipo) * 0.0000225099 );
   
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de unidades</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Bitcoin: {bitcoin}</p>
      

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={1.1734992}>Euro</option>
        <option value={464000.30}>Bitcoin</option>
       
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
