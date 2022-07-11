import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './style.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    //01001000/json/
    //06233-030
    if(input === '') {
      alert('Prencha o campo')
      return;
    }

    try {
      //const response = await api.get(`${input}/json`)
      //const response = await api.get(`${input}.json`)
      const response = await api.get(`json/${input}`)
      setCep(response.data)
      setInput("")
    } catch {
      alert("Ops, erro ao buscar");
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador de Cep</h1>
      <div className='containerInput'>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Digite seu cep...'/>
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
         <main className='main'>
         <h2>CEP: {cep.code}</h2>
         <span>{cep.address}</span> 
         <span>Bairro: {cep.district}</span>
         <span>Cidade: {cep.city}, {cep.state}</span>
         <span>DDD: {cep.ddd}</span>
       </main>
      )}     
    </div>
  );
}

export default App;
//{cep.address_type},