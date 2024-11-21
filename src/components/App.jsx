import { useState } from 'react';
import Child from './Child';
import '../styles/App.scss';

function App() {
  const [name, setName] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <h1>Formulario de Nombre</h1>
      <Child onNameChange={handleNameChange} />
      <p>Nombre Ingresado: {name}</p> {/* Mostrar el nombre recibido del hijo */}
    </div>
  )
}

export default App;
